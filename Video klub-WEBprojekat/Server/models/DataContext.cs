using Microsoft.EntityFrameworkCore;

namespace Server.models
{
    public class DataContext: DbContext
    {
        public DbSet<VideoKlub> VideoKlubovi { get; set; }
        public DbSet<Film> Filmovi { get; set; }
        public DbSet<Glumac> Glumci { get; set; }

        public DataContext(DbContextOptions dbContextOptions): base(dbContextOptions)
        {
           
        }
    }
}