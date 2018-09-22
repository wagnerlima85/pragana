import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { fadeInAnimation } from '../../assets/animations/index';
import { AppService } from '../app.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': ''}
})
export class TextComponent implements OnInit {
  public title:string;
  public autor:string;
  public description:string;
  constructor(public translate: TranslateService, private route: ActivatedRoute, private router: Router, private service:AppService) { 
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
       var str = event.url.split('/');
       if(str[1] === "texts" || str[1] === "textos"){
         this.loadSelectedText(str[2]);
       }	
      }
   });

  }

  ngOnInit() {
    var str = this.route.snapshot.url.join().split(',');
    if(str[0] === "texts" || str[0] === "textos"){
      this.loadSelectedText(str[1]);
    }	
  }

  loadSelectedText(param:string){

    let p2 = this.service.parseSlugPT(param,true);

    this.translate.get('textos.'+p2+'.title').subscribe(res => {this.title = res;});
    this.translate.get('textos.'+p2+'.autor').subscribe(res => {this.autor = res;});
    this.translate.get('textos.'+p2+'.description').subscribe(res => {this.description = res.join('\n');});

  }

}
