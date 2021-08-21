import { Film } from "./film.js";
import { Glumac } from "./glumac.js";

export class VideoKlub
{
    constructor(id,naziv)
    {
        this.id=id;
        this.naziv= naziv;
        this.filmovi=[];
        this.kontejner= null;
    }

    crtaj(host)
    {

        this.kontejner= document.createElement("div");
        this.kontejner.className="kontejner";
        
        host.appendChild(this.kontejner);
        
        this.crtajTop();
        this.crtajBot(1);
       
    }

    crtajTop()
    {
        const top= document.createElement("div");
        top.className="top";
        this.kontejner.appendChild(top);


        const naz= document.createElement("h1");
        naz.innerHTML="Video klub: "+ this.naziv;
        naz.className="nazivKluba";
        top.appendChild(naz);


        const divOpcija= document.createElement("div");
        divOpcija.className="divOpcija";
        top.appendChild(divOpcija);

        const pocetnaStrana= document.createElement("div");
        pocetnaStrana.innerHTML="POCETNA";
        pocetnaStrana.className="estetikDugme";

        const pocetnaLink= document.createElement("a");
        pocetnaLink.className="link";
        pocetnaLink.href="#";
        pocetnaLink.appendChild(pocetnaStrana);
        divOpcija.appendChild(pocetnaLink);

        pocetnaStrana.onclick=(el=>{
            this.crtajBot(2);
        })

        const dodajFilm= document.createElement("div");
        dodajFilm.innerHTML="DODAJ NOVI FILM";
        dodajFilm.classList.add("estetikDugme");

        const link = document.createElement("a");
        link.className = "link";
        link.href = "#";
        link.appendChild(dodajFilm);
       
        divOpcija.appendChild(link);

        dodajFilm.onclick=(el=>
            {
                let bot2= this.kontejner.querySelector(".bot");
                if(bot2!=null)
                    this.kontejner.removeChild(bot2);

                bot2= this.kontejner.querySelector(".bot2Form");
                    if(bot2!=null)
                        this.kontejner.removeChild(bot2);
                
                bot2= this.kontejner.querySelector(".bot3");
                if(bot2!=null)
                    this.kontejner.removeChild(bot2);

                bot2= this.kontejner.querySelector(".botPrikaz");
                if(bot2!=null)
                    this.kontejner.removeChild(bot2);


                const bot2Form= document.createElement("div");
                bot2Form.className="bot2Form";
                this.kontejner.appendChild(bot2Form);

                const formDodaj= document.createElement("div");
                formDodaj.className="formDodaj";
                bot2Form.appendChild(formDodaj);

                const nazivLab= document.createElement("label");
                nazivLab.innerHTML="Naziv filma:";
                formDodaj.appendChild(nazivLab);

                const nazivInput= document.createElement("input");
                nazivInput.className="nazivInput";
                formDodaj.appendChild(nazivInput);

                const reziserLab= document.createElement("label");
                reziserLab.innerHTML="Reziser:";
                reziserLab.classList.add("pomeraj");
                formDodaj.appendChild(reziserLab);

                const reziserInput= document.createElement("input");
                reziserInput.className="reziserInput";
                formDodaj.appendChild(reziserInput);

                const zanrLab= document.createElement("label");
                zanrLab.innerHTML="Tip:";
                zanrLab.classList.add("pomeraj");
                formDodaj.appendChild(zanrLab);

                const select2= document.createElement("select");
                select2.className="select2";
                zanrovi.forEach(el=>
                    {
                        opcija= document.createElement("option");
                        opcija.innerHTML= el;
                        select2.appendChild(opcija);
                    })

                formDodaj.appendChild(select2);

                const godLab=document.createElement("label");
                godLab.innerHTML="Godina:";
                godLab.classList.add("pomeraj");
                formDodaj.appendChild(godLab);

                const godInput= document.createElement("input");
                godInput.type="number";
                godInput.className="godInput";
                formDodaj.appendChild(godInput);

                const ocenaLab= document.createElement("label");
                ocenaLab.innerHTML="Ocena:";
                ocenaLab.classList.add("pomeraj");
                formDodaj.appendChild(ocenaLab);

                const select3= document.createElement("select");
                select3.className="select3";
                for(let i=1;i<=10;i++)
                    {
                        opcija= document.createElement("option");
                        opcija.innerHTML= i;
                        select3.appendChild(opcija);
                    }

                formDodaj.appendChild(select3);
                
                const opisLab= document.createElement("label");
                opisLab.innerHTML="Opis:";
                opisLab.classList.add("pomeraj");
                formDodaj.appendChild(opisLab);

                const opisInput= document.createElement("textarea");
                opisInput.className="opisInput";
                formDodaj.appendChild(opisInput); 

                const vremeLab= document.createElement("label");
                vremeLab.innerHTML="Trajanje:";
                vremeLab.classList.add("pomeraj");
                formDodaj.appendChild(vremeLab);

                const divTrajanje= document.createElement("div");
                divTrajanje.className="divTrajanje";
                formDodaj.appendChild(divTrajanje);

                const vremeInput= document.createElement("input");
                vremeInput.type="number";
                vremeInput.className="vremeInput";
                divTrajanje.appendChild(vremeInput);

                const min= document.createElement("label");
                min.innerHTML="min";
                divTrajanje.appendChild(min);



                const slikaLab= document.createElement("label");
                slikaLab.innerHTML="Link fotografije:";
                slikaLab.classList.add("pomeraj");
                formDodaj.appendChild(slikaLab);

                const slikaInput= document.createElement("input");
                slikaInput.className="slikaInput";
                formDodaj.appendChild(slikaInput);    

                const divGlumac= document.createElement("div");
                divGlumac.className="divGlumac";
                bot2Form.appendChild(divGlumac);

                const labOpis= document.createElement("h2");
                labOpis.innerHTML="Unesite glumce/glumice:";
                divGlumac.appendChild(labOpis);

                const formaGlumac= document.createElement("div");
                formaGlumac.className="formaGlumac";
                divGlumac.appendChild(formaGlumac);

                let nizLabela=["Ime:","Prezime:","Zemlja rodjenja:","Godiste:", "Link fotografije:"];
                let tipovi=["text","text","text","date","text"];
                let lab;
                let input;
                nizLabela.forEach((el,i)=>
                    {
                        lab= document.createElement("label");
                        lab.innerHTML=el;
                        if(i!=0)
                            lab.classList.add("pomeraj");
                      

                        formaGlumac.appendChild(lab);
                        
                        
                        input= document.createElement("input");
                        input.className=this.naziv+i;
                
                        input.type=tipovi[i];
                        formaGlumac.appendChild(input);
                        
                    })
               
                const dodajGlumca= document.createElement("button");
                dodajGlumca.innerHTML="Dodaj glumca";
                dodajGlumca.className="but";
                dodajGlumca.classList.add("pomeraj");
                formaGlumac.appendChild(dodajGlumca);
                var nizGlumaca=[];
                dodajGlumca.onclick=(el=>
                    {
                        this.dodajGlumca(formaGlumac,nizGlumaca);
                   
                    })

                

                const divButtons= document.createElement("div");
                divButtons.className="divButtons";
                bot2Form.appendChild(divButtons);

                const butNazad= document.createElement("button");
                butNazad.innerHTML="Nazad";
                butNazad.onclick=(el=>{
                    this.crtajBot(2);
                })
                butNazad.className="but";
                butNazad.classList.add("but2");
                divButtons.appendChild(butNazad);

                const butDodaj= document.createElement("button");
                butDodaj.innerHTML="Dodaj film";
                butDodaj.className="but";
                butDodaj.classList.add("but2");
                divButtons.appendChild(butDodaj);
                
                    butDodaj.onclick=(el=>
                        {
                            
                            this.dodajIzmeniFilm(formDodaj,1, nizGlumaca, 0);
                        })
                
            })

        const sortPoOceni= document.createElement("div");
        sortPoOceni.innerHTML="SORTIRAJ PREMA OCENI";
        sortPoOceni.classList.add("estetikDugme");

        const link2 = document.createElement("a");
        link2.className = "link";
        link2.href = "#";
        link2.appendChild(sortPoOceni);
       
        divOpcija.appendChild(link2);


        sortPoOceni.onclick= (el=>
            {
                this.sortirajFilmove();
            })
       
        const lab= document.createElement("label");
        lab.innerHTML="SORTIRAJ PO TIPU:";
        lab.className="sort";
        const zanr= document.createElement("div");

        let select= document.createElement("select");
        select.className="zanrSort";
        divOpcija.appendChild(select);
        let opcija;

        const zanrovi= ["Thriller","Horror","Comedy", "Action", "Romance", "Sci-Fi","Adventure","Crime","Drama","Fantasy","Mystery"];
        zanrovi.forEach(el=>
            {
                opcija= document.createElement("option");
                opcija.innerHTML= el;
                select.appendChild(opcija);
            })

        const labela= document.createElement("button");
        labela.innerHTML="➔";
        labela.className="lbl";
        labela.onclick= (el=>
            {
                this.crtajBot(3);
            })

        zanr.appendChild(lab);
        zanr.appendChild(select);
        zanr.appendChild(labela);
        divOpcija.appendChild(zanr);

    }

    crtajBot(i)
    {
        const bot2Form= this.kontejner.querySelector(".bot2Form");
        if(bot2Form!=null)
            this.kontejner.removeChild(bot2Form);

        const bot1= this.kontejner.querySelector(".bot");
        if(bot1!=null)
            this.kontejner.removeChild(bot1);

        const bot3= this.kontejner.querySelector(".bot3");
        if(bot3!=null)
            this.kontejner.removeChild(bot3);

        const botPrikaz= this.kontejner.querySelector(".botPrikaz");
        if(botPrikaz!=null)
            this.kontejner.removeChild(botPrikaz);

            let bot= document.createElement("div");
            bot.className="bot";
            this.kontejner.appendChild(bot);
            let film;
        let glumac;
      
        if(i==1)
        {
            fetch("https://localhost:5001/VideoKlub/vratiSveFilmove/"+this.id)
            .then(p=> {
                
                p.json().then(q=>
                    {
                       
                        q.forEach(el=>
                            {
                             
                            
                                film= new Film(el.id, el.naziv, el.reziser, el.zanr, el.godina, el.ocena, el.slikaLink, el.opis, el.trajanje);
                                this.dodajFilm(film);
                              
                                el.glumci.forEach(e=>
                                    {
                                        glumac= new Glumac(e.id, e.ime, e.prezime,e.godRodjenja, e.mestoRodjenja, e.slikaLink);
                                        console.log(glumac);
                                        
                                        film.dodajGlumca(glumac);
                                    })
                                
                                film.crtajFilm(bot,this, this.kontejner);
                                
                            })
                    })
            })
        }
        else if(i==2)
        {
            this.filmovi.forEach(el=>
                {
                    el.crtajFilm(bot,this,this.kontejner);
                })
        }
        else
        {
            const zanrSort= this.kontejner.querySelector(".zanrSort").value;
            this.filmovi.forEach(el=>
                {
                    if(el.zanr==zanrSort)
                        el.crtajFilm(bot, this, this.kontejner);
                })
        }
        
        
    }

    dodajFilm(film)
    {
        this.filmovi.push(film);
    }

    dodajGlumca(formaGlumac, nizGlumaca)
    {
        
        let nizImputa=[];

        for(let i=0;i<5;i++)
        {
            nizImputa[i]= formaGlumac.querySelector("."+this.naziv+i).value;
         
            if(nizImputa[i].length==0)
            {
                alert("Niste uneli sve podatke o glumcu !");
                return;
            }
        }
        
       
            let glumac = new Glumac(0,nizImputa[0],nizImputa[1],nizImputa[3],nizImputa[2],nizImputa[4]);
            nizGlumaca.push(glumac);
            
    
        
    }

    dodajIzmeniFilm(formDodaj,i, nizGlumaca, filmZaIzmenu)
    {
        
        const naziv= formDodaj.querySelector(".nazivInput").value;
      

        if(naziv.length==0)
        {
            alert("Unesite naziv filma ! ");
            return;
        }
        
        const reziser= formDodaj.querySelector(".reziserInput").value;
    
        if(reziser.length==0)
       {
        alert("Unesite rezisera filma ! ");
        return;
       }

        const tip= formDodaj.querySelector(".select2").value;
     

        const god= formDodaj.querySelector(".godInput").value;
        if(god.length==0 || god<1800)
        {
            alert("Unesite validnu godinu izlaska filma");
            return;
        }
     

        const ocena= formDodaj.querySelector(".select3").value;
    

        const opis= formDodaj.querySelector(".opisInput").value;
    

        if(opis.length==0)
        {
            alert("Unesite opis filma ! ");
            return;
        }

        const trajanje= formDodaj.querySelector(".vremeInput").value;
          
    
            if(trajanje.length==0)
            {
                alert("Unesite vreme trajanja filma ! ");
                return;
            }
    
            const slika= formDodaj.querySelector(".slikaInput").value;
         
    
            if(slika.length==0)
            {
                alert("Unesite link fotografije ! ");
                return;
            }
            let id=0;
            
            let film;
            

            if(i==1)
            {
              fetch("https://localhost:5001/VideoKlub/dodajFilm/"+this.id,
              {
                method:"POST",
                headers:
                {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    Id:id,
                    Naziv:naziv,
                    Reziser:reziser,
                    Zanr:tip,
                    Godina:god,
                    Ocena:ocena,
                    SlikaLink:slika,
                    Opis:opis,
                    Trajanje:trajanje
                })
              }).then(p=>
                {
                 
                    if(p.ok)
                    {
                        p.json().then(q=>
                            {
                             
                                
                                this.dodajFilm(new Film(q,naziv,reziser,tip,god,ocena,slika,opis,trajanje));
                                film= this.filmovi[this.filmovi.length-1];
                               
                                if(film==null)
                                   {
                                       alert("Greska prilikom dodavanja filma !");
                                       return;
                                   }    
                              
                                
                                if(nizGlumaca.length==0)
                                   this.crtajBot(2);
                                
                                nizGlumaca.forEach(el=>
                                    {
                                        fetch("https://localhost:5001/VideoKlub/dodajGlumca/"+film.id,
                                        {
                                            method:"POST",
                                            headers: 
                                            {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                Id:id,
                                                Ime:el.ime,
                                                Prezime:el.prezime,
                                                GodRodjenja: el.godRodjenja,
                                                MestoRodjenja: el.mestoRodjenja,
                                                SlikaLink: el.slikaLink
                
                                            })
                                        }).then(pp=>
                                            {
                                             ;
                                                if(pp.status==200)
                                                {
                                                    
                                                    pp.json().then(q=>
                                                        {
                                                            film.dodajGlumca(new Glumac(q, el.ime, el.prezime, el.godRodjenja, el.mestoRodjenja,el.slikaLink));
                                                         
                                                            this.crtajBot(2);
                                                        })
                                                }
                                                else if(pp.status==406)
                                                {
                                                    alert("Greska prilikom dodavanja glumca !");
                                                    return;
                                                }
                                            }).catch(pp=>{
                                                alert("Greska !");
                                            })
                                    })
                                            })
                                    }
                                    else if(p.status==406)
                                    {
                                        alert("Greska prilikom unosa !");
                                    }
                                }).catch(p=>
                                    {
                                        alert("Greska !");
                                    })
                                
            }
            else
            {
                fetch("https://localhost:5001/VideoKlub/izmeniFilm",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        Id:filmZaIzmenu.id,
                        Naziv:naziv,
                        Reziser:reziser,
                        Zanr:tip,
                        Godina:god,
                        Ocena:ocena,
                        SlikaLink:slika,
                        Opis:opis,
                        Trajanje:trajanje
                    })
                }).then(p=>
                    {
                        if(!p.ok)
                            alert("Greska prilikom izmene filma !");
                        else
                        {
                            filmZaIzmenu.naziv=naziv;
                            filmZaIzmenu.reziser= reziser;
                            filmZaIzmenu.zanr= tip;
                            filmZaIzmenu.godina=god;
                            filmZaIzmenu.ocena= ocena;
                            filmZaIzmenu.slikaLink=slika;
                            filmZaIzmenu.opis=opis;
                            filmZaIzmenu.trajanje=trajanje;
                            this.crtajBot(2);
                        }

                    }).catch(q=>{
                        alert("Greska ! ");
                    })
            }
    }

    sortirajFilmove()
    {

        const bot2Form= this.kontejner.querySelector(".bot2Form");
        if(bot2Form!=null)
            this.kontejner.removeChild(bot2Form);

        const bot1= this.kontejner.querySelector(".bot");
        if(bot1!=null)
            this.kontejner.removeChild(bot1);

        const botPrikaz= this.kontejner.querySelector(".botPrikaz");
        if(botPrikaz!=null)
            this.kontejner.removeChild(botPrikaz);

            let bot3= document.createElement("div");
            bot3.className="bot3";
            this.kontejner.appendChild(bot3);
            let red;
            let ocenaRed;
            let kockica;
            let proc;

        let sortNiz=[]
        this.filmovi.forEach(el=>{
            sortNiz.push(el);
        })

        sortNiz.sort(function(a,b){
            return b.ocena - a.ocena
        })

        sortNiz.forEach(el=>
            {
                red=document.createElement("div");
                red.className="red2";
                bot3.appendChild(red);
                el.crtajFilm(red,this,this.kontejner);

                ocenaRed= document.createElement("div");
                ocenaRed.className="ocenaRed";
                red.appendChild(ocenaRed);

                for(let i=1;i<=10;i++)
                {
                    kockica=document.createElement("div");
                    ocenaRed.appendChild(kockica);
               
                    kockica.classList.add("kockica");
                    if(i<=el.ocena)
                    {
                        kockica.className="bojiKockicu";
                    }
                }
                proc= document.createElement("div");
                ocenaRed.appendChild(proc);
                proc.className="proc";
                proc.innerHTML= el.ocena+"/10 ⭐";

            })
    }
}