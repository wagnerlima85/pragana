import { Menu } from "../menu.model";

export const menuPT:Menu[] =[
    {id:1, slug:'',title:'Início',items:[]},
    {id:2, slug:'',title:'Textos',items:[
        {id:3, slug:'textos/pintura-ainda',title:'Pintura, Ainda'},
        {id:4, slug:'textos/os-exercicios-da-pintura',title:'Os exercícios da pintura'},
        {id:5, slug:'textos/pragana-por-ferreira-gullar',title:'Pragana por Ferreira Gullar'},
        {id:6, slug:'textos/a-pintura-de-pragana',title:'A pintura de Pragana'},
        {id:7, slug:'textos/o-homem-e-sua-sombra',title:'O homem e sua sombra'},
        {id:8, slug:'textos/dialogando-com-nossas-sombras',title:'Dialogando com nossas sombras'}]},
    {id:9, slug:'videos',title:'Vídeos',items:[]},
    {id:10, slug:'contato',title:'Contato',items:[]},
    {id:11, slug:'fotografias',title:'Fotografias',items:[]}
]

export const menuEN:Menu[] =[
    {id:1, slug:'',title:'Home',items:[]},
    {id:0, slug:'',title:'Texts',items:[
        {id:0, slug:'texts/painting-still',title:'Paintig, Still'},
        {id:0, slug:'texts/os-exercicios-da-pintura',title:'Os exercícios da pintura'},
        {id:0, slug:'texts/pragana-por-ferreira-gullar',title:'Pragana por Ferreira Gullar'},
        {id:0, slug:'texts/a-pintura-de-pragana',title:'A pintura de Pragana'},
        {id:0, slug:'texts/o-homem-e-sua-sombra',title:'O homem e sua sombra'},
        {id:0, slug:'texts/dialogando-com-nossas-sombras',title:'Dialogando com nossas sombras'}]},
    {id:0, slug:'videos',title:'Vídeos',items:[]},
    {id:0, slug:'contato',title:'Contato',items:[]},
    {id:0, slug:'fotografias',title:'Fotografias',items:[]}
]
export const language:string[] =['PT','EN']