using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class v5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Film_VideoKlub_KlubId",
                table: "Film");

            migrationBuilder.AlterColumn<int>(
                name: "KlubId",
                table: "Film",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Film_VideoKlub_KlubId",
                table: "Film",
                column: "KlubId",
                principalTable: "VideoKlub",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Film_VideoKlub_KlubId",
                table: "Film");

            migrationBuilder.AlterColumn<int>(
                name: "KlubId",
                table: "Film",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Film_VideoKlub_KlubId",
                table: "Film",
                column: "KlubId",
                principalTable: "VideoKlub",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
