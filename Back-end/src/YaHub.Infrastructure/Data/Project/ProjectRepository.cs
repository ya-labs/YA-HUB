using Microsoft.EntityFrameworkCore;
using YaHub.Application.Interfaces.Project;
using YaHub.Domain.Members;
using YaHub.Infrastructure.Persistence;
using DomainProject = YaHub.Domain.Projects.Project;

namespace YaHub.Infrastructure.Data;

public sealed class ProjectRepository : IProjectRepository
{
    private readonly YaHubDbContext _context;

    public ProjectRepository(YaHubDbContext context)
    {
        _context = context;
    }

    public async Task CreateAsync(DomainProject project)
    {
        _context.Projects.Add(project);
        await _context.SaveChangesAsync();
    }

    public async Task<List<DomainProject>> ReadAllAsync()
    {
        return await _context.Projects
            .OrderBy(project => project.Name)
            .ToListAsync();
    }

    public async Task<DomainProject?> FindByIdAsync(Guid id)
    {
        return await _context.Projects
            .FirstOrDefaultAsync(project => project.Id == id);
    }

    public async Task<DomainProject?> FindByIdWithMembersAsync(Guid id)
    {
        return await _context.Projects
            .Include(project => project.Members)
            .FirstOrDefaultAsync(project => project.Id == id);
    }

    public async Task<List<Member>> ReadMembersAsync(Guid projectId)
    {
        var project = await _context.Projects
            .AsNoTracking()
            .Include(project => project.Members)
            .FirstOrDefaultAsync(project => project.Id == projectId);

        return project?.Members
            .OrderBy(member => member.Name)
            .ToList() ?? [];
    }

    public async Task UpdateAsync(DomainProject project)
    {
        _context.Projects.Update(project);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(DomainProject project)
    {
        _context.Projects.Remove(project);
        await _context.SaveChangesAsync();
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}
