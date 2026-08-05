using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using YaHub.Application.DTOs.Member;
using YaHub.Application.Interfaces.Member;

namespace YaHub.Api.Controllers;

[ApiController]
[Authorize]
[Route("api/members")]
public class MemberController : ControllerBase
{
    private readonly IMemberService _memberService;

    public MemberController(IMemberService memberService)
    {
        _memberService = memberService;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] MemberRequest memberRequest)
    {
        var result = await _memberService.CreateAsync(memberRequest);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpGet]
    public async Task<IActionResult> Read()
    {
        var result = await _memberService.ReadAllAsync();

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpGet("{id:guid}/projects")]
    public async Task<IActionResult> ReadProjects(Guid id)
    {
        var result = await _memberService.ReadProjectsAsync(id);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, [FromBody] MemberRequest memberRequest)
    {
        var result = await _memberService.UpdateAsync(id, memberRequest);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var result = await _memberService.DeleteAsync(id);

        if (!result.IsSuccess)
            return BadRequest(result);

        return Ok(result);
    }
}
