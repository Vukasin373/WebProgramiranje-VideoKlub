using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VideoKlub",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VideoKlub", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Film",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Reziser = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Zanr = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Godina = table.Column<int>(type: "int", nullable: false),
                    Ocena = table.Column<int>(type: "int", nullable: false),
                    SlikaLink = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Opis = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Trajanje = table.Column<int>(type: "int", nullable: false),
                    KlubId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Film", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Film_VideoKlub_KlubId",
                        column: x => x.KlubId,
                        principalTable: "VideoKlub",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Glumac",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    GodRodjenja = table.Column<int>(type: "int", nullable: false),
                    MestoRodjenja = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    SlikaLink = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    FilmId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Glumac", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Glumac_Film_FilmId",
                        column: x => x.FilmId,
                        principalTable: "Film",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Film_KlubId",
                table: "Film",
                column: "KlubId");

            migrationBuilder.CreateIndex(
                name: "IX_Glumac_FilmId",
                table: "Glumac",
                column: "FilmId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Glumac");

            migrationBuilder.DropTable(
                name: "Film");

            migrationBuilder.DropTable(
                name: "VideoKlub");
        }
    }
}
