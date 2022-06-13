import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private route:ActivatedRoute, private service:UserService) { }

  user:any;
  isloading:boolean=false;

  registerForm: any = new FormGroup({
   
      email: new FormControl(''),
      password: new FormControl(''),
  }) ;

  signIn(){
    console.log(this.registerForm.value)

    this.service.userLogin(this.registerForm.value)
    {
        this.isloading=true;
        this.service.userLogin(this.registerForm.value).subscribe({
          next:(data) =>{
            this.isloading=false;
            // localStorage.setItem("access", JSON.stringify(data));
            localStorage.setItem("access", JSON.stringify(data[0]));
            console.log(data)
            this.user=data[0].name + ' ' + data[0].surname;
            console.log(this.user + "is a user");
            localStorage.setItem("user", this.user);
            
            if(data[0].role=='Client' && data[0].is_active===true){
              localStorage.setItem("clientID",data[0].id);
              this.router.navigateByUrl('/services',{replaceUrl:true});
              localStorage.setItem("Role", data[0].role)
            }
            if(data[0].role=='Service provider' && data[0].is_active===true){
              this.router.navigateByUrl('/run_home',{replaceUrl:true});
              localStorage.setItem("runnerID",data[0].id);
            }
            if(data[0].role=='Admin' && data[0].is_active===true){
              this.router.navigateByUrl('/dashPage',{replaceUrl:true});
              localStorage.setItem("adminID",data[0].id);
            }
            
          },

          error: (e) => (
            console.log(e),
             Swal.fire({
              confirmButtonColor: "red",
              icon: 'error',
              title: e.error.error,
              footer: 'Please verifty your login credentials'}),
              this.isloading=false
          )

      });

  }

    
  }

  ngOnInit(): void {
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {}
}