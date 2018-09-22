import { SubMenu } from "./submenu.model";

export class Menu {
    constructor(
        public id:number,
        public slug: string,
        public title: string,
        public items:SubMenu[]
    ){
 
    }
}
