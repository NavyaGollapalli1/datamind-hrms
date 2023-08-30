import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dm-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {


  userForm= new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    active:new FormControl('')    
    
  }); 
  password: FormControl<string | null> | undefined;
  
  
  onSubmit() {
    if(this.userForm.valid){
      console.log("Form Submitted!");

    }
}

  constructor(private employeesService: EmployeesService) {

  }
  
  
   ngOnInit(): void {
    // this.userForm = new FormGroup({
      // alert("Password must have minimum 8 characters") ;
      this.password = new FormControl('', [
  Validators.required,
  Validators.minLength(8),
  
 ])
    }
    //  throw new Error('Method not implemented.');
  
   ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  //  addEmployee(){
    
  //    this.employeesService.createUsers( { "firstName": "navya", "lastName": "gollapalli", "email": "password1@gmail.com", "password": "Abcd@1234", "active":true});

  //  }

  createEmployee(){
    
    this.employeesService.createUsers( { "firstName": "samuel", "lastName": "pradeep", "email": "password231@gmail.com", "password": "Abcd@1234", "active":true}); 
   }
 }
