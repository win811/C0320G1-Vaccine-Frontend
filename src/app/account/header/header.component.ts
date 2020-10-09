import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../../../node_modules/@ngx-translate/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {LoginComponent} from '../../security/Login/Login.component';
import { JwtResponse } from '../../shared/models/dto/jwt-response';
import { TokenStorageService } from '../../shared/services/TokenStorageService';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language = 'vi';
  userLogged: JwtResponse;
  isLogged: boolean;
  constructor(
    private translate: TranslateService,
    public matDialog: MatDialog,
    private tokenStorage: TokenStorageService,
    private activatedRoute: ActivatedRoute,
    private router : Router) {
    translate.setDefaultLang('vi');
    translate.use('vi');
  }

  ngOnInit() {
    if (this.tokenStorage.getJwtResponse() != null) {
      this.userLogged = this.tokenStorage.getJwtResponse();
      this.isLogged = (this.tokenStorage.getJwtResponse().accountName != null);
      console.log(this.isLogged);
    } else {
      console.log("chuwa ddawng nhap");
      this.isLogged = false;
    }
    this.activatedRoute.queryParamMap.subscribe(value => {
      const returnUrl = value.get('returnUrl');
      if (returnUrl) {
        this.openModal();
      }
    })
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

    modalDialog.afterClosed().subscribe(result => {
      console.log(result);
      this.isLogged = result;
      console.log('The dialog was closed');
      this.activatedRoute.queryParamMap.subscribe(value => {
        const returnUrl = value.get('returnUrl');
        if (!returnUrl) {
          this.ngOnInit();
        } else this.router.navigateByUrl(returnUrl);
      })
    })
  }

  logOut(): void {
    this.tokenStorage.signOut()
    this.isLogged = false;
  }

}
