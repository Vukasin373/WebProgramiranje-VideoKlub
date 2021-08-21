using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server.models
{
    [Table("Film")]
    public class Film
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }

        [Column("Reziser")]
        [MaxLength(255)]
        public string Reziser { get; set; }

        [Column("Zanr")]
        [MaxLength(255)]
        public string Zanr { get; set; }

        [Column("Godina")]
        public int Godina { get; set; }

        [Column("Ocena")]
        public int Ocena { get; set; }

        [Column("SlikaLink")]
        [MaxLength(255)]
        public string SlikaLink { get; set; }

        [Column("Opis")]
        [MaxLength(255)]
        public string Opis { get; set; }

        [Column("Trajanje")]
        public int Trajanje { get; set; }

        public virtual List<Glumac> Glumci { get; set; }

        [JsonIgnore]
        public VideoKlub Klub { get; set; }

       

    }
}