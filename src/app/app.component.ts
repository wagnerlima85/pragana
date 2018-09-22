import { Component, OnInit, Inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fadeInAnimation } from '../assets/animations/index';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import * as $ from 'jquery';
import { Router, NavigationStart } from '@angular/router';
import { ContactService } from './contact.service';



const STORAGE_KEY = 'lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': ''}
})
export class AppComponent implements OnInit {

 

  constructor(public translate: TranslateService, public contactService: ContactService, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
 
        $('html, body').animate({ scrollTop: 0 }, 'slow');

        $('.page-loader').show();
        $('.loader').show();

        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
        $('#span').click();  
      }
    });
  }
  
  ngOnInit(){ 
    this.translate.addLangs(['en', 'pt']);
    this.translate.setDefaultLang('pt');

    const browserLang = this.getStoragedLang();
    this.translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');

  }

  public getStoragedLang(): string {
    const lang: string = this.storage.get(STORAGE_KEY) || this.translate.getBrowserLang();
    this.storage.set(STORAGE_KEY, lang);
    console.log(this.storage.get(STORAGE_KEY));
    return lang;
  }
}
