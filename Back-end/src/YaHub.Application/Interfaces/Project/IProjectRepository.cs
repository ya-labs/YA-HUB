using YaHub.Domain.Projects;
using DomainMember = YaHub.Domain.Members.Member;

namespace YaHub.Application.Interfaces.Project;

public interface IProjectRepository
{
    Task CreateAsync(YaHub.Domain.Projects.Project project);
    Task<List<YaHub.Domain.Projects.Project>> ReadAllAsync();
    Task<YaHub.Domain.Projects.Project?> FindByIdAsync(Guid id);
    Task<YaHub.Domain.Projects.Project?> FindByIdWithMembersAsync(Guid id);
    Task<List<DomainMember>> ReadMembersAsync(Guid projectId);
    Task UpdateAsync(YaHub.Domain.Projects.Project project);
    Task DeleteAsync(YaHub.Domain.Projects.Project project);
    Task SaveChangesAsync();
}
