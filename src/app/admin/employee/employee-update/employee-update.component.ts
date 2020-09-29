import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EMPLOYEE_MESSAGES, validateCode, checkAge, CheckPhoneNumber } from './../../../shared/validations/custom-validators';
import { EmployeeService } from './../../../shared/services/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeCreateComponent } from '../employee-create/employee-create.component';
import { Employee } from './../../../shared/models/employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeUpdateForm: FormGroup;
  errors = EMPLOYEE_MESSAGES;
  constructor(private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.employeeUpdateForm = this.formBuilder.group({
      id: [""],
      code: ["", [Validators.required, Validators.pattern(/^NV-\d{4}$/),], [validateCode(this.employeeService).bind(
        validateCode
      ),]],
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      birthday: ["", [Validators.required, checkAge]],
      idCard: ["", [Validators.required, Validators.pattern(/^\d{9}$/)]],
      position: ["", Validators.required],
      phoneNumber: ["", [Validators.required, CheckPhoneNumber]],
      address: ["", [Validators.required, Validators.minLength(3)]],
      role: ["", Validators.required]
    })
    this.employeeUpdateForm.patchValue(this.data.dataEmployee);
  }

  // Quân
  onSubmit() {

    let employee = this.employeeUpdateForm.value as Employee;
    employee.isDelete = false
    this.employeeService.updateEmployee(employee).subscribe(() => {
      this.dialogRef.close();
    })
  }


}
