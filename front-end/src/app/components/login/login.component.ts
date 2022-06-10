import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service:UserService) { }
  user:any;
  registerForm: any = new FormGroup({
   

    email: new FormControl(''),
    password: new FormControl(''),
}) ;



  ngOnInit(): void {
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {}
}