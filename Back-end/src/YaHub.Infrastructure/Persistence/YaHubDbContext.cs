using Microsoft.EntityFrameworkCore;
using YaHub.Domain.Members;
using YaHub.Domain.Projects;
using YaHub.Domain.Users;

namespace YaHub.Infrastructure.Persistence;

public class YaHubDbContext : DbContext
{
    public YaHubDbContext(DbContextOptions<YaHubDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<Member> Members => Set<Member>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>().ToTable("users");
        modelBuilder.Entity<Project>()
            .ToTable("projects")
            .HasMany(project => project.Members)
            .WithMany(member => member.Projects)
            .UsingEntity(
                "project_members",
                right => right
                    .HasOne(typeof(Member))
                    .WithMany()
                    .HasForeignKey("member_id")
                    .OnDelete(DeleteBehavior.Cascade),
                left => left
                    .HasOne(typeof(Project))
                    .WithMany()
                    .HasForeignKey("project_id")
                    .OnDelete(DeleteBehavior.Cascade),
                join =>
                {
                    join.ToTable("project_members");
                    join.HasKey("project_id", "member_id");
                });

        modelBuilder.Entity<Member>().ToTable("members");
    }
}
