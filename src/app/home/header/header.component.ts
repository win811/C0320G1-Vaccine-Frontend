import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }

  switchLanguage(language: string){
    if (language == 'en') {
      this.translate.use('vi');
      this.language = 'vi';
    } else {
      this.translate.use('en');
      this.language = 'en';
    }
  }

}
