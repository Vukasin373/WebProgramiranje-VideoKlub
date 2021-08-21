export class Glumac
{
    constructor(id,ime, prezime, godRodjenja, mestoRodjenja, slikaLink)
    {
        this.id=id;
        this.ime=ime;
        this.prezime=prezime;
        this.godRodjenja=godRodjenja;
        this.mestoRodjenja=mestoRodjenja;
        this.slikaLink=slikaLink;
    }

   
        crtajGlumca(glumciForma) {
        
        const divGlumac= document.createElement("div");
        divGlumac.className="divGlumacPrikaz";
        glumciForma.appendChild(divGlumac);

        const slika= document.createElement("img");
        slika.className="slikaGlumca";
        slika.src=this.slikaLink;
        divGlumac.appendChild(slika);

        const podaci= document.createElement("div");
        podaci.className="podaci";
        divGlumac.appendChild(podaci);

        const ime= document.createElement("h2");
        ime.innerHTML="-"+this.ime;
        podaci.appendChild(ime);

        const prezime= document.createElement("h2");
        podaci.appendChild(prezime);
        prezime.innerHTML="-"+this.prezime;

        const god= document.createElement("h2");
        podaci.appendChild(god);
        god.innerHTML="-"+ this.godRodjenja;

        const mesto= document.createElement("h2");
        podaci.appendChild(mesto);
        mesto.innerHTML="-"+ this.mestoRodjenja;
    } 
}