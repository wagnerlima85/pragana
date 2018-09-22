import { RouterModule, Routes} from "@angular/router";
import { TextComponent } from "./text/text.component";
import { VideoComponent } from "./video/video.component";
import { ContatoComponent } from "./contato/contato.component";
import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders } from '@angular/core';
import { PhotosComponent } from "./photos/photos.component";

const appRoutes: Routes =[
    {path:'',component: HomeComponent},
    {path:'textos/:slug',component: TextComponent},
    {path:'texts/:slug',component: TextComponent},
    {path:'videos',component: VideoComponent},
    {path:'fotografias',component: PhotosComponent},
    {path:'photographs',component: PhotosComponent},
    {path:'contato',component: ContatoComponent},
    {path:'contact',component: ContatoComponent}

];

export const RouterPragana: ModuleWithProviders = RouterModule.forRoot(appRoutes);

