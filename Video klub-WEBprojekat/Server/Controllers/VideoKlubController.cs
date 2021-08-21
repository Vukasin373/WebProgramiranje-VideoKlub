using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.models;
namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VideoKlubController: ControllerBase
    {
        public DataContext Context { get; set; }

        public VideoKlubController(DataContext dataContext)
        {
            Context= dataContext;
        }

        [HttpGet]
        [Route("vratiSveVideoKlubove")]

        public async Task<List<VideoKlub>> vratiSveVideoKlubove()
        {
            return await Context.VideoKlubovi.ToListAsync();
        }

        [HttpPost]
        [Route("dodajVideoKlub")]
        public async Task dodajVideoKlub([FromBody] VideoKlub videoKlub)
        {
            Context.VideoKlubovi.Add(videoKlub);
            await Context.SaveChangesAsync();
        }

        [HttpPut]
        [Route("izmeniVideoKlub")]
        public async Task izmeniVideoKlub([FromBody] VideoKlub videoKlub)
        {
            Context.VideoKlubovi.Update(videoKlub);
            await Context.SaveChangesAsync();
        }

        [HttpDelete]
        [Route("obrisiVideoKlub/{id}")]
        public async Task obrisiVideoKlub(int id)
        {
            var klub= await Context.VideoKlubovi.FindAsync(id);
            Context.VideoKlubovi.Remove(klub);
            await Context.SaveChangesAsync();
        }

        [HttpGet]
        [Route("vratiSveFilmove/{id}")]

        public async Task<List<Film>> vratiSveFilmove(int id)
        {
            return await Context.Filmovi.Where(kl=> kl.Klub.Id==id).Include(g=>g.Glumci).ToListAsync();
        }

        [HttpPost]
        [Route("dodajFilm/{id}")]
        public async Task<ActionResult> dodajFilm(int id, [FromBody] Film film)
        {
            var klub= await Context.VideoKlubovi.FindAsync(id);
            film.Klub= klub;

            if(film.Naziv == "" || film.Reziser == "" || film.Opis=="" || film.Zanr==""|| film.Opis==""|| film.SlikaLink=="")
                return StatusCode(406);

            Context.Filmovi.Add(film);
            await Context.SaveChangesAsync();

           
            int idd = film.Id;
            return Ok(idd);
        }

        [HttpPut]
        [Route("izmeniFilm")]
        public async Task<ActionResult> izmeniFilm([FromBody] Film film)
        {
            if(film.Naziv == "" || film.Reziser == "" || film.Opis=="" || film.Zanr==""|| film.Opis==""|| film.SlikaLink=="")
                return StatusCode(406);

            Context.Filmovi.Update(film);
            await Context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("obrisiFilm/{id}")]
        public async Task<ActionResult> obrisiFilm(int id)
        {
            var film= await Context.Filmovi.FindAsync(id);
            Context.Filmovi.Remove(film);
            await Context.SaveChangesAsync();
            return Ok();
        }

        [HttpPost]
        [Route("dodajGlumca/{id}")]

        public async Task<ActionResult> dodajGlumca(int id, [FromBody] Glumac glumac)
        {
            var film= await Context.Filmovi.FindAsync(id);
            glumac.Film= film;

            if(glumac.Ime=="" || glumac.Prezime=="" || glumac.MestoRodjenja=="" || glumac.SlikaLink=="")
                return StatusCode(406);
            
            Context.Glumci.Add(glumac);
            await Context.SaveChangesAsync();
            return Ok(glumac.Id);
        }

        

    }
}