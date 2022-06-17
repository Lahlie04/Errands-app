import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ask } from 'src/app/interface/requests';
import { RequestsService } from 'src/app/services/requests.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  client_id:any;
  requests:ask[]=[]
  request_id:any;
  accept:any;

  reqData: any={

  };
  runner_id: any;

  constructor(private service:RequestsService, private userService: UserService,private router:Router) { }

 

  ngOnInit(): void {


   // this.acceptRequest();


  this.getRequests();
  this.runner_id= localStorage.getItem("runnerID");

  }

getRequests(){
  this.service.getRequests().subscribe((res=>{
    this.requests = res
    console.log(res);
   // console.log(res[0].id);


  }));

}

acceptRequest(id){
  Swal.fire({
    title: 'Are you sure you want to accept this request?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, accept it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Accepted!',
        'Request has been accepted.',
        'success'
      )
      this.router.navigateByUrl('/Jobs', {replaceUrl:true});
      this.service.accept(this.runner_id, id).subscribe((res=>{
        this.accept = res ;
        console.log(res);
      }))
    }
  })
}





myFunction(ask:any){
  console.log('hello');
  console.log(ask);
  this.reqData.id=ask;
  this.reqData.runner_id=localStorage.getItem("runnerID");
  console.log(this.reqData);
// this.reqData.id=ask["id"];
console.log(this.reqData);

this.reqData.runner_id=localStorage.getItem("runnerID")

  this.acceptRequest(ask.id);


}


getUsers(){
  this.userService.getUsers().subscribe((res) =>{

  })
}
}