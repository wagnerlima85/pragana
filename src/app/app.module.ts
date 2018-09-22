import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';

import '../util/rxjs-extensions';
import { AppComponent } from './app.component';

import { VideoComponent } from './video/video.component';
import { TextComponent } from './text/text.component';
import { ContatoComponent } from './contato/contato.component';
import { RouterPragana } from './routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AppService } from './app.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SanitizerPipe } from '../pipes/sanitizer.pipe';
import { PhotosComponent } from './photos/photos.component';
import { ContactService } from './contact.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    TextComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    SanitizerPipe,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    RouterPragana,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StorageServiceModule
  ],
  exports:[TranslateModule],
  providers: [AppService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
