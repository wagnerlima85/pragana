import { Injectable } from '@angular/core';
import "rxjs/add/operator/toPromise";

@Injectable()
export class AppService {

  constructor(){}

parseSlugPT(p:string, t:boolean):string{
    if(t){
      switch(p){
        case "deconstruction":
          return "desconstrucao";
        case "deconstruction-the-embryo":
          return "desconstrucao-o-embriao";
        case "pragana-by-pragana-deconstruction":
          return "pragana-por-pragana-desconstrucao"
        case "all-our-knowledge-has-its-origins-in-our-perception":
          return "toda-nossa-cognicao-principia-de-sentimento"
        case "printed-collage":
        return "colagem-impressa"
        case "everything-is-daring-for-those-who-dare-nothing":
          return "tudo-e-ousado-para-quem-a-nada-se-atreve"
        case "colors-and-shadows":
          return "cores-e-sombras"
        case "a-dialogue-with-our-shadows":
          return "dialogando-com-nossas-sombras"
        case "a-man-and-his-shadow":
          return "o-homem-e-sua-sombra"
        case "pragana-painting":
          return "a-pintura-de-pragana"
        case "the-exercises-of-painting":
          return "os-exercicios-da-pintura";
        case "pragana-by-ferreira-gullar":
          return "pragana-por-ferreira-gullar"
        case "painting-still":
          return "pintura-ainda"
        default:
          return p;
      } 
    }else{
      switch(p){
        case "contact":
          return "contato";
        case "videos":
          return "videos";
        case "photographs":
          return "fotografias";
        default:
          return p;  
      } 
    }
  }
  parseSlugEN(p:string, t:boolean):string{
    if(t){
      switch(p){
        case "desconstrucao":
          return "deconstruction";
        case "desconstrucao-o-embriao":
          return "deconstruction-the-embryo";
        case "pragana-by-pragana-deconstruction":
          return "pragana-por-pragana-desconstrucao"
        case "all-our-knowledge-has-its-origins-in-our-perception":
          return "toda-nossa-cognicao-principia-de-sentimento"
        case "printed-collage":
        return "colagem-impressa"
        case "everything-is-daring-for-those-who-dare-nothing":
          return "tudo-e-ousado-para-quem-a-nada-se-atreve"
        case "colors-and-shadows":
          return "cores-e-sombras"
        case "a-dialogue-with-our-shadows":
          return "dialogando-com-nossas-sombras"
        case "a-man-and-his-shadow":
          return "o-homem-e-sua-sombra"
        case "pragana-painting":
          return "a-pintura-de-pragana"
        case "the-exercises-of-painting":
          return "os-exercicios-da-pintura";
        case "pragana-by-ferreira-gullar":
          return "pragana-por-ferreira-gullar"
        case "pintura-ainda":
          return "painting-still"
        default:
          return p;
      } 
    }else{
      switch(p){
        case "contact":
          return "contato";
        case "videos":
          return "videos";
        case "photographs":
          return "fotografias";
        default:
          return p;  
      }
    }
  }
}
