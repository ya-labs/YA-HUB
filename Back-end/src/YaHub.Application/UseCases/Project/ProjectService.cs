using Microsoft.Extensions.Logging;
using YaHub.Application.Common;
using YaHub.Application.DTOs.Member;
using YaHub.Application.DTOs.Project;
using YaHub.Application.Interfaces.Mappers;
using YaHub.Application.Interfaces.Member;
using YaHub.Application.Interfaces.Project;

namespace YaHub.Application.UseCases.Project;

public sealed class ProjectService : IProjectService
{
    private readonly IProjectRepository _repository;
    private readonly IMemberRepository _memberRepository;
    private readonly IProjectMapper _mapper;
    private readonly IMemberMapper _memberMapper;
    private readonly ILogger<ProjectService> _logger;

    public ProjectService(
        IProjectRepository repository,
        IMemberRepository memberRepository,
        IProjectMapper mapper,
        IMemberMapper memberMapper,
        ILogger<ProjectService> logger)
    {
        _repository = repository;
        _memberRepository = memberRepository;
        _mapper = mapper;
        _memberMapper = memberMapper;
        _logger = logger;
    }

    public async Task<Result<ProjectResponse>> CreateAsync(ProjectRequest projectRequest)
    {
        if (projectRequest == null)
            return Result<ProjectResponse>.Fail("Project request cannot be empty.");

        var project = _mapper.ToEntity(projectRequest);

        await _repository.CreateAsync(project);
        _logger.LogInformation("Project {ProjectId} successfully created.", project.Id);

        return Result<ProjectResponse>.Ok(_mapper.ToResponse(project));
    }

    public async Task<Result<List<ProjectResponse>>> ReadAllAsync()
    {
        var projects = await _repository.ReadAllAsync();

        return Result<List<ProjectResponse>>.Ok(_mapper.ToResponseList(projects));
    }

    public async Task<Result<List<MemberResponse>>> ReadMembersAsync(Guid projectId)
    {
        var project = await _repository.FindByIdAsync(projectId);

        if (project == null)
            return Result<List<MemberResponse>>.Fail($"Project with id {projectId} not found.");

        var members = await _repository.ReadMembersAsync(projectId);

        return Result<List<MemberResponse>>.Ok(_memberMapper.ToResponseList(members));
    }

    public async Task<Result<MemberResponse>> AddMemberAsync(Guid projectId, Guid memberId)
    {
        var project = await _repository.FindByIdWithMembersAsync(projectId);

        if (project == null)
            return Result<MemberResponse>.Fail($"Project with id {projectId} not found.");

        var member = await _memberRepository.FindByIdAsync(memberId);

        if (member == null)
            return Result<MemberResponse>.Fail($"Member with id {memberId} not found.");

        if (project.Members.Any(projectMember => projectMember.Id == memberId))
            return Result<MemberResponse>.Fail("Member is already linked to this project.");

        project.AddMember(member);
        await _repository.SaveChangesAsync();

        _logger.LogInformation("Member {MemberId} linked to project {ProjectId}.", memberId, projectId);

        return Result<MemberResponse>.Ok(_memberMapper.ToResponse(member));
    }

    public async Task<Result<MemberResponse>> RemoveMemberAsync(Guid projectId, Guid memberId)
    {
        var project = await _repository.FindByIdWithMembersAsync(projectId);

        if (project == null)
            return Result<MemberResponse>.Fail($"Project with id {projectId} not found.");

        var member = project.Members.FirstOrDefault(projectMember => projectMember.Id == memberId);

        if (member == null)
            return Result<MemberResponse>.Fail("Member is not linked to this project.");

        project.Members.Remove(member);
        await _repository.SaveChangesAsync();

        _logger.LogInformation("Member {MemberId} removed from project {ProjectId}.", memberId, projectId);

        return Result<MemberResponse>.Ok(_memberMapper.ToResponse(member));
    }

    public async Task<Result<ProjectResponse>> UpdateAsync(Guid id, ProjectRequest projectRequest)
    {
        if (projectRequest == null)
            return Result<ProjectResponse>.Fail("Project request cannot be empty.");

        var project = await _repository.FindByIdAsync(id);

        if (project == null)
            return Result<ProjectResponse>.Fail($"Project with id {id} not found.");

        project.Update(projectRequest.Name, projectRequest.Description, projectRequest.Url);

        await _repository.UpdateAsync(project);
        _logger.LogInformation("Project {ProjectId} successfully updated.", project.Id);

        return Result<ProjectResponse>.Ok(_mapper.ToResponse(project));
    }

    public async Task<Result<ProjectResponse>> DeleteAsync(Guid id)
    {
        var project = await _repository.FindByIdAsync(id);

        if (project == null)
            return Result<ProjectResponse>.Fail($"Project with id {id} not found.");

        await _repository.DeleteAsync(project);
        _logger.LogInformation("Project {ProjectId} successfully deleted.", project.Id);

        return Result<ProjectResponse>.Ok(_mapper.ToResponse(project));
    }
}
