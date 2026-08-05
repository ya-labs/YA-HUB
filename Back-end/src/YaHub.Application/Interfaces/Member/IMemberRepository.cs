using DomainMember = YaHub.Domain.Members.Member;
using DomainProject = YaHub.Domain.Projects.Project;

namespace YaHub.Application.Interfaces.Member;

public interface IMemberRepository
{
    Task CreateAsync(DomainMember member);
    Task<List<DomainMember>> ReadAllAsync();
    Task<DomainMember?> FindByIdAsync(Guid id);
    Task<List<DomainProject>> ReadProjectsAsync(Guid memberId);
    Task UpdateAsync(DomainMember member);
    Task DeleteAsync(DomainMember member);
}
