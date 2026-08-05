using YaHub.Application.Common;
using YaHub.Application.DTOs.Member;
using YaHub.Application.DTOs.Project;

namespace YaHub.Application.Interfaces.Project;

public interface IProjectService
{
    Task<Result<ProjectResponse>> CreateAsync(ProjectRequest projectRequest);
    Task<Result<List<ProjectResponse>>> ReadAllAsync();
    Task<Result<List<MemberResponse>>> ReadMembersAsync(Guid projectId);
    Task<Result<MemberResponse>> AddMemberAsync(Guid projectId, Guid memberId);
    Task<Result<MemberResponse>> RemoveMemberAsync(Guid projectId, Guid memberId);
    Task<Result<ProjectResponse>> UpdateAsync(Guid id, ProjectRequest projectRequest);
    Task<Result<ProjectResponse>> DeleteAsync(Guid id);
}
