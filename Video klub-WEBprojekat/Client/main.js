import { VideoKlub } from "./videoKlub.js";
import { Film } from "./film.js";

//const klub= new VideoKlub(4,"TRIL");

//klub.crtaj(document.body);

let klub;
fetch("https://localhost:5001/VideoKlub/vratiSveVideoKlubove")
    .then(p=> p.json().then(q=>{
        q.forEach(element => {
            klub= new VideoKlub(element.id, element.naziv);
            klub.crtaj(document.body);        
        });
    
    }))