// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Server.models;

namespace Server.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210810001015_v1")]
    partial class v1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Server.models.Film", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Godina")
                        .HasColumnType("int")
                        .HasColumnName("Godina");

                    b.Property<int?>("KlubId")
                        .HasColumnType("int");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.Property<int>("Ocena")
                        .HasColumnType("int")
                        .HasColumnName("Ocena");

                    b.Property<string>("Opis")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Opis");

                    b.Property<string>("Reziser")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Reziser");

                    b.Property<string>("SlikaLink")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("SlikaLink");

                    b.Property<int>("Trajanje")
                        .HasColumnType("int")
                        .HasColumnName("Trajanje");

                    b.Property<string>("Zanr")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Zanr");

                    b.HasKey("Id");

                    b.HasIndex("KlubId");

                    b.ToTable("Film");
                });

            modelBuilder.Entity("Server.models.Glumac", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("FilmId")
                        .HasColumnType("int");

                    b.Property<int>("GodRodjenja")
                        .HasColumnType("int")
                        .HasColumnName("GodRodjenja");

                    b.Property<string>("Ime")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Ime");

                    b.Property<string>("MestoRodjenja")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("MestoRodjenja");

                    b.Property<string>("Prezime")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Prezime");

                    b.Property<string>("SlikaLink")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("SlikaLink");

                    b.HasKey("Id");

                    b.HasIndex("FilmId");

                    b.ToTable("Glumac");
                });

            modelBuilder.Entity("Server.models.VideoKlub", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.HasKey("Id");

                    b.ToTable("VideoKlub");
                });

            modelBuilder.Entity("Server.models.Film", b =>
                {
                    b.HasOne("Server.models.VideoKlub", "Klub")
                        .WithMany("Filmovi")
                        .HasForeignKey("KlubId");

                    b.Navigation("Klub");
                });

            modelBuilder.Entity("Server.models.Glumac", b =>
                {
                    b.HasOne("Server.models.Film", "Film")
                        .WithMany("Glumci")
                        .HasForeignKey("FilmId");

                    b.Navigation("Film");
                });

            modelBuilder.Entity("Server.models.Film", b =>
                {
                    b.Navigation("Glumci");
                });

            modelBuilder.Entity("Server.models.VideoKlub", b =>
                {
                    b.Navigation("Filmovi");
                });
#pragma warning restore 612, 618
        }
    }
}
