import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';
import { EmployeeCreateComponent } from '../employee-create/employee-create.component';
import { Employee } from '../../../shared/models/employee';
import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../../../shared/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  searchForm: FormGroup
  private employeeList: Employee[] = [];
  private totalElements: number;
  private pageSize: number;
  private currentPage: number;
  private list: Employee[] = []




  constructor(private employeeService: EmployeeService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      code: [""],
      fullName: [""],
      position: [""]
    })
    this.getPage(1)

  }

  // Quân
  getPage(page: number) {

    this.employeeService.getSearchEmployee(page, this.searchForm).pipe(
      tap(res => {
        if (res != null) {
          this.totalElements = res.totalElements;
          this.pageSize = res.size;
          this.currentPage = page;
        } else {
          this.totalElements = 1;
          this.pageSize = 1;
          this.currentPage = 1;
        }


      }),
      map(res => {
        if (res != null) {
          return res.content
        } else {
          return this.list
        }
      })
    ).subscribe((data) => {
      this.employeeList = data
    });
  }


  // Quân
  openDialog(): void {
    const dialogRef = this.dialog.open(EmployeeCreateComponent, {
      width: "810px",
      height: "480px",
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != "cancel") {
        this.ngOnInit();
      }
    });
  }


  // Quân
  openEdit(employee) {
    const dialogRef = this.dialog.open(EmployeeUpdateComponent, {
      width: "810px",
      height: "480px",
      autoFocus: true,
      data: {
        dataEmployee: employee,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != "cancel") {
        this.getPage(this.currentPage)
      }
    });
  }

  // Quân
  search() {
    this.getPage(1)
  }

  // Quân
  delete(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employeeList = this.employeeList.filter(
        (t) => t.id != id
      );
    })
  }

}
