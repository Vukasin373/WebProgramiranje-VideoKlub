import { Glumac } from "./glumac.js";

export class Film
{
    constructor(id,naziv,reziser, zanr, godina, ocena, slikaLink, opis, trajanje)
    {
        this.id= id;
        this.naziv= naziv;
        this.reziser= reziser;
        this.zanr= zanr;
        this.godina= godina;
        this.ocena= ocena;
        this.slikaLink= slikaLink;
        this.opis= opis;
        this.trajanje= trajanje;

        this.glumci=[];
        this.miniKontejner= null;
    }

    dodajGlumca(glumac)
    {
        this.glumci.push(glumac);
    }

    crtajFilm(host, klub,kont)
    {
        this.miniKontejner= document.createElement("div");
        this.miniKontejner.className="divFilm";
        host.appendChild(this.miniKontejner);
     

        const slika= document.createElement("img");
        slika.className="slika";
        slika.src= this.slikaLink;
        this.miniKontejner.appendChild(slika);

        const divNaziv= document.createElement("div");
        divNaziv.className="divNaziv";
        this.miniKontejner.appendChild(divNaziv);

        const divIme= document.createElement("h1");
        divIme.className="divIme";
        divNaziv.appendChild(divIme);
        
        divIme.innerHTML=this.naziv;

        const divZanr= document.createElement("h3");
        divZanr.innerHTML="-"+this.zanr;
        divNaziv.appendChild(divZanr);

        const divOcena= document.createElement("h2");
        divOcena.innerHTML=this.ocena+"/10 ⭐";
        divNaziv.appendChild(divOcena);


        const divDugmici= document.createElement("div");
        divDugmici.className="divDugmici";
        divNaziv.appendChild(divDugmici);

        const prikazBut= document.createElement("button");
        prikazBut.innerHTML="Prikaz";
        prikazBut.className="but";
        prikazBut.classList.add("pIo");
        divDugmici.appendChild(prikazBut);
        prikazBut.onclick=(el=>
            {
                this.prikazFilma(kont,klub);
            })

        const deleteBut= document.createElement("button");
        deleteBut.innerHTML="Obrisi";
        deleteBut.className="but";
        deleteBut.classList.add("pIo");
        divDugmici.appendChild(deleteBut);

        deleteBut.onclick=(el=>
            {
                fetch("https://localhost:5001/VideoKlub/obrisiFilm/"+this.id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(p=>
                    {
                     
                        if(!p.ok)
                            alert("Neuspelo brisanje !");
                     
                        const index= klub.filmovi.indexOf(this);
                      

                        klub.filmovi.splice(index,1);
                       
                       
                        klub.crtajBot(2);
                    })
            })

          

    }


    prikazFilma(host,klub)
    {
        const bot2Form= host.querySelector(".bot2Form");
        if(bot2Form!=null)
             host.removeChild(bot2Form);

        const bot1= host.querySelector(".bot");
        if(bot1!=null)
              host.removeChild(bot1);

        const bot3= host.querySelector(".bot3");
        if(bot3!=null)
                 host.removeChild(bot3);

        const botPrikaz= document.createElement("div");
        host.appendChild(botPrikaz);
        botPrikaz.className="botPrikaz";

        const formaFilma= document.createElement("div");
        formaFilma.className="formaPrikaz";
        botPrikaz.appendChild(formaFilma);


        const nazivLab= document.createElement("label");
        nazivLab.innerHTML="Naziv filma:";
        formaFilma.appendChild(nazivLab);

        const nazivInput= document.createElement("input");
        nazivInput.className="nazivInput";
        formaFilma.appendChild(nazivInput);
        nazivInput.value=this.naziv;

        const reziserLab= document.createElement("label");
        reziserLab.innerHTML="Reziser:";
        reziserLab.classList.add("pomeraj");
        formaFilma.appendChild(reziserLab);

        const reziserInput= document.createElement("input");
        reziserInput.className="reziserInput";
        formaFilma.appendChild(reziserInput);
        reziserInput.value= this.reziser;

        const zanrLab= document.createElement("label");
        zanrLab.innerHTML="Tip:";
        zanrLab.classList.add("pomeraj");
        formaFilma.appendChild(zanrLab);

        const select2= document.createElement("select");
        select2.className="select2";
        let opcija;
        const zanrovi= ["Thriller","Horror","Comedy", "Action", "Romance", "Sci-Fi","Adventure","Crime","Drama","Fantasy","Mystery"];
        zanrovi.forEach(el=>
            {
                opcija= document.createElement("option");
                opcija.innerHTML= el;
                select2.appendChild(opcija);
            })
        
        select2.value=this.zanr;
        formaFilma.appendChild(select2);

        const godLab=document.createElement("label");
        godLab.innerHTML="Godina:";
        godLab.classList.add("pomeraj");
        formaFilma.appendChild(godLab);
        

        const godInput= document.createElement("input");
        godInput.type="number";
        godInput.className="godInput";
        godInput.value=this.godina;
        formaFilma.appendChild(godInput);

        const ocenaLab= document.createElement("label");
        ocenaLab.innerHTML="Ocena:";
        ocenaLab.classList.add("pomeraj");
        formaFilma.appendChild(ocenaLab);

        const select3= document.createElement("select");
        select3.className="select3";
        for(let i=1;i<=10;i++)
            {
                opcija= document.createElement("option");
                opcija.innerHTML= i;
                select3.appendChild(opcija);
            }

            formaFilma.appendChild(select3);
        select3.value=this.ocena;

        const opisLab= document.createElement("label");
        opisLab.innerHTML="Opis:";
        opisLab.classList.add("pomeraj");
        formaFilma.appendChild(opisLab);

        const opisInput= document.createElement("textarea");
        opisInput.className="opisInput";
        opisInput.value= this.opis;
        formaFilma.appendChild(opisInput); 

        const vremeLab= document.createElement("label");
        vremeLab.innerHTML="Trajanje:";
        vremeLab.classList.add("pomeraj");
        formaFilma.appendChild(vremeLab);

        const divTrajanje= document.createElement("div");
        divTrajanje.className="divTrajanje";
        formaFilma.appendChild(divTrajanje);

        const vremeInput= document.createElement("input");
        vremeInput.type="number";
        vremeInput.className="vremeInput";
        vremeInput.value=this.trajanje;
        divTrajanje.appendChild(vremeInput);

        const min= document.createElement("label");
        min.innerHTML="min";
        divTrajanje.appendChild(min);



        const slikaLab= document.createElement("label");
        slikaLab.innerHTML="Link fotografije:";
        slikaLab.classList.add("pomeraj");
        formaFilma.appendChild(slikaLab);

        const slikaInput= document.createElement("input");
        slikaInput.className="slikaInput";
        slikaInput.value= this.slikaLink;
        formaFilma.appendChild(slikaInput);    

        const dugmeIzmeni= document.createElement("button");
        dugmeIzmeni.innerHTML="Izmeni";
        dugmeIzmeni.className="but";
        dugmeIzmeni.classList.add("pomeraj");
        formaFilma.appendChild(dugmeIzmeni);
        this.crtajGlumce(botPrikaz);
        
        dugmeIzmeni.onclick=(el=>
            {
                this.izmenaFilma(formaFilma,klub);
            })

       

               
       
        
    }

    izmenaFilma(formaFilma, klub)
    {
        klub.dodajIzmeniFilm(formaFilma,2,null, this);
    }

    crtajGlumce(botPrikaz)
    {
        const glumciForma= document.createElement("div");
        glumciForma.className="glumciForma";
        botPrikaz.appendChild(glumciForma);
        console.log(this.glumci);
        this.glumci.forEach(ell=>
            {
  
                ell.crtajGlumca(glumciForma);
            })
    }

}