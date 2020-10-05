import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../../../node_modules/@ngx-translate/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {LoginComponent} from '../../security/Login/Login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language = 'vi';

  constructor(
    private translate: TranslateService,
    public matDialog: MatDialog) {
    translate.setDefaultLang('vi');
    translate.use('vi');
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

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside it body
    dialogConfig.disableClose = false;
    dialogConfig.height = '350px';
    dialogConfig.width = '500px';
    const modalDialog = this.matDialog.open(LoginComponent, dialogConfig);
  }

}
