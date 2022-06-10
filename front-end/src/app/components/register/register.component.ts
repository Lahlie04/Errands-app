import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    cell_no: new FormControl(''),
    surname: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    confirmPassword: new FormControl(''),
    role: new FormControl('')
    
  });
  sessionTrue: boolean = false;
  submitted = false;
  registerForm: FormGroup | undefined;
  option: any;
  selected:any;
  constructor(private formBuilder: FormBuilder, private service: UserService, private router:Router, private route: ActivatedRoute) { }
  register(){
    if(this.form.value.role==="Client"){
      this.service.addUser(this.form.value).subscribe((res:any)=>{
        console.log(res)
       
       }
       )
    }else if(this.form.value.role==="Service provider"){
      
        this.service.addRunner(this.form.value).subscribe((res:any)=>{
          console.log(res)         }
            ) 
    }
   
    this.router.navigateByUrl('/login',{replaceUrl:true});
    

  
  }
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
     
    });
  }
  

  myFunction(){
    console.log(this.form.value);
    this.register();
    //alert(res)
    // this.router.navigateByUrl('/login',{replaceUrl:true});
    
  }
}
