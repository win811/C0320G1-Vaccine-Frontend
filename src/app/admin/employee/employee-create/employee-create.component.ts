import { Employee } from '../../../shared/models/employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../shared/services/employee.service';
import { MatDialogRef } from '@angular/material/dialog'
import { CheckPhoneNumber, checkAge, validateCode, EMPLOYEE_MESSAGES } from '../../../shared/validations/custom-validators';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;
  errors = EMPLOYEE_MESSAGES;
  constructor(private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeCreateComponent>
  ) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
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
  }


  // Quân
  onSubmit() {

    let employee = this.employeeForm.value as Employee;
    employee.isDelete = false
    this.employeeService.createEmployee(employee).subscribe(() => {
      this.dialogRef.close();
    })
  }

}
