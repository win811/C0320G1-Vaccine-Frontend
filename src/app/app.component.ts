import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C0320G1-Vaccine-Frontend';
  // constructor(private translate: TranslateService) {
  //   translate.setDefaultLang('vi');
  //   translate.use('vi');
  // }
  //
  // switchLanguage(language: string) {
  //   this.translate.use(language);
  // }
}
