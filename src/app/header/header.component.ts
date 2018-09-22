import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../app.service';
import { DOCUMENT } from '@angular/platform-browser';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
	encapsulation: ViewEncapsulation.None

})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService, 
    @Inject(DOCUMENT) private document: Document, 
      private router: Router,
      private service:AppService,
      @Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  ngOnInit() {}
  reload(lang){
    this.translate.use(lang);
    this.storage.set('lang', lang);
    var str = this.document.location.pathname.split('/');
    console.log(lang);
    if(str[1] === "texts" || str[1] === "textos"){
      this.loadSelectedText(str[2], true, lang);
    }	
  }
  loadSelectedText(param:string, isText:boolean, lang:string){

    let p2:string = ""
    if(lang === 'pt'){
      p2 = "/textos/"+this.service.parseSlugPT(param,isText);
    }else{
      p2 = "/texts/"+this.service.parseSlugEN(param,isText);
    }
    let url = "";
    if(isText){
      url = p2.toString();
    }

    console.log(url);
    this.router.navigate([url]);

  }
}
