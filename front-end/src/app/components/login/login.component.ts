import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  
  registerForm: any = new FormGroup({
   
    cell_no: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
}) ;

  ngOnInit(): void {
  }

}
