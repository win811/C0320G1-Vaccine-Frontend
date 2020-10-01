import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {LoginComponent} from '../../security/Login/Login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit() {
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
