using Microsoft.Extensions.Logging;
using YaHub.Application.Common;
using YaHub.Application.DTOs.Member;
using YaHub.Application.DTOs.Project;
using YaHub.Application.Interfaces.Mappers;
using YaHub.Application.Interfaces.Member;

namespace YaHub.Application.UseCases.Member;

public sealed class MemberService : IMemberService
{
    private readonly IMemberRepository _repository;
    private readonly IMemberMapper _mapper;
    private readonly IProjectMapper _projectMapper;
    private readonly ILogger<MemberService> _logger;

    public MemberService(
        IMemberRepository repository,
        IMemberMapper mapper,
        IProjectMapper projectMapper,
        ILogger<MemberService> logger)
    {
        _repository = repository;
        _mapper = mapper;
        _projectMapper = projectMapper;
        _logger = logger;
    }

    public async Task<Result<MemberResponse>> CreateAsync(MemberRequest memberRequest)
    {
        if (memberRequest == null)
            return Result<MemberResponse>.Fail("Member request cannot be empty.");

        var member = _mapper.ToEntity(memberRequest);

        await _repository.CreateAsync(member);
        _logger.LogInformation("Member {MemberId} successfully created.", member.Id);

        return Result<MemberResponse>.Ok(_mapper.ToResponse(member));
    }

    public async Task<Result<List<MemberResponse>>> ReadAllAsync()
    {
        var members = await _repository.ReadAllAsync();

        return Result<List<MemberResponse>>.Ok(_mapper.ToResponseList(members));
    }

    public async Task<Result<List<ProjectResponse>>> ReadProjectsAsync(Guid memberId)
    {
        var member = await _repository.FindByIdAsync(memberId);

        if (member == null)
            return Result<List<ProjectResponse>>.Fail($"Member with id {memberId} not found.");

        var projects = await _repository.ReadProjectsAsync(memberId);

        return Result<List<ProjectResponse>>.Ok(_projectMapper.ToResponseList(projects));
    }

    public async Task<Result<MemberResponse>> UpdateAsync(Guid id, MemberRequest memberRequest)
    {
        if (memberRequest == null)
            return Result<MemberResponse>.Fail("Member request cannot be empty.");

        var member = await _repository.FindByIdAsync(id);

        if (member == null)
            return Result<MemberResponse>.Fail($"Member with id {id} not found.");

        member.Update(memberRequest.Name, memberRequest.Role);

        await _repository.UpdateAsync(member);
        _logger.LogInformation("Member {MemberId} successfully updated.", member.Id);

        return Result<MemberResponse>.Ok(_mapper.ToResponse(member));
    }

    public async Task<Result<MemberResponse>> DeleteAsync(Guid id)
    {
        var member = await _repository.FindByIdAsync(id);

        if (member == null)
            return Result<MemberResponse>.Fail($"Member with id {id} not found.");

        await _repository.DeleteAsync(member);
        _logger.LogInformation("Member {MemberId} successfully deleted.", member.Id);

        return Result<MemberResponse>.Ok(_mapper.ToResponse(member));
    }
}
