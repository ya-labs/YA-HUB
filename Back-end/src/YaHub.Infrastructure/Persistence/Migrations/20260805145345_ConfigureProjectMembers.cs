using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace YaHub.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ConfigureProjectMembers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MemberProject_members_MembersId",
                table: "MemberProject");

            migrationBuilder.DropForeignKey(
                name: "FK_MemberProject_projects_ProjectsId",
                table: "MemberProject");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MemberProject",
                table: "MemberProject");

            migrationBuilder.DropIndex(
                name: "IX_MemberProject_ProjectsId",
                table: "MemberProject");

            migrationBuilder.RenameTable(
                name: "MemberProject",
                newName: "project_members");

            migrationBuilder.RenameColumn(
                name: "MembersId",
                table: "project_members",
                newName: "member_id");

            migrationBuilder.RenameColumn(
                name: "ProjectsId",
                table: "project_members",
                newName: "project_id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_project_members",
                table: "project_members",
                columns: new[] { "project_id", "member_id" });

            migrationBuilder.CreateIndex(
                name: "IX_project_members_member_id",
                table: "project_members",
                column: "member_id");

            migrationBuilder.AddForeignKey(
                name: "FK_project_members_members_member_id",
                table: "project_members",
                column: "member_id",
                principalTable: "members",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_project_members_projects_project_id",
                table: "project_members",
                column: "project_id",
                principalTable: "projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_project_members_members_member_id",
                table: "project_members");

            migrationBuilder.DropForeignKey(
                name: "FK_project_members_projects_project_id",
                table: "project_members");

            migrationBuilder.DropPrimaryKey(
                name: "PK_project_members",
                table: "project_members");

            migrationBuilder.DropIndex(
                name: "IX_project_members_member_id",
                table: "project_members");

            migrationBuilder.RenameTable(
                name: "project_members",
                newName: "MemberProject");

            migrationBuilder.RenameColumn(
                name: "member_id",
                table: "MemberProject",
                newName: "MembersId");

            migrationBuilder.RenameColumn(
                name: "project_id",
                table: "MemberProject",
                newName: "ProjectsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MemberProject",
                table: "MemberProject",
                columns: new[] { "MembersId", "ProjectsId" });

            migrationBuilder.CreateIndex(
                name: "IX_MemberProject_ProjectsId",
                table: "MemberProject",
                column: "ProjectsId");

            migrationBuilder.AddForeignKey(
                name: "FK_MemberProject_members_MembersId",
                table: "MemberProject",
                column: "MembersId",
                principalTable: "members",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MemberProject_projects_ProjectsId",
                table: "MemberProject",
                column: "ProjectsId",
                principalTable: "projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
