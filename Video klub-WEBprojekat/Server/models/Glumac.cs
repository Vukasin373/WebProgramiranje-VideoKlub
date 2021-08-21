using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server.models
{
    [Table("Glumac")]
    public class Glumac
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }

        [Column("Ime")]
        [MaxLength(255)]
        public string Ime { get; set; }

        [Column("Prezime")]
        [MaxLength(255)]
        public string Prezime { get; set; }

        [Column("GodRodjenja")]
        public string GodRodjenja { get; set; }

        [Column("MestoRodjenja")]
        [MaxLength(255)]
        public string MestoRodjenja { get; set; }

        [Column("SlikaLink")]
        [MaxLength(255)]
        public string SlikaLink { get; set; }

        [JsonIgnore]
        public Film Film { get; set; }
        public int FilmId { get; set; }

    }
}