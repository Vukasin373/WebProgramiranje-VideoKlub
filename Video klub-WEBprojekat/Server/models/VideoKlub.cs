using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
    

namespace Server.models
{
    [Table("VideoKlub")]
    public class VideoKlub
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }

        public virtual List<Film> Filmovi { get; set; }

       
    }
}