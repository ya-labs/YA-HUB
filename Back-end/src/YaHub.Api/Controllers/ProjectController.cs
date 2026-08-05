using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using YaHub.Application.DTOs.Project;
using YaHub.Application.Interfaces.Project;

namespace YaHub.Api.Controllers;

[ApiController]
[Authorize]
[Route("api/projects")]
public class ProjectController : ControllerBase
{
    private readonly IProjectService _projectService;

    public ProjectController(IProjectService projectService)
    {
        _projectService = projectService;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] ProjectRequest projectRequest)
    {
        var result = await _projectService.CreateAsync(projectRequest);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpGet]
    public async Task<IActionResult> Read()
    {
        var result = await _projectService.ReadAllAsync();

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpGet("{id:guid}/members")]
    public async Task<IActionResult> ReadMembers(Guid id)
    {
        var result = await _projectService.ReadMembersAsync(id);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpPost("{projectId:guid}/members/{memberId:guid}")]
    public async Task<IActionResult> AddMember(Guid projectId, Guid memberId)
    {
        var result = await _projectService.AddMemberAsync(projectId, memberId);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpDelete("{projectId:guid}/members/{memberId:guid}")]
    public async Task<IActionResult> RemoveMember(Guid projectId, Guid memberId)
    {
        var result = await _projectService.RemoveMemberAsync(projectId, memberId);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, [FromBody] ProjectRequest projectRequest)
    {
        var result = await _projectService.UpdateAsync(id, projectRequest);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var result = await _projectService.DeleteAsync(id);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }
}
