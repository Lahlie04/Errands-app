import { Component, OnInit } from '@angular/core';
import { RunnerService } from 'src/app/services/runner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-runnerhome',
  templateUrl: './runnerhome.component.html',
  styleUrls: ['./runnerhome.component.css']
})
export class RunnerhomeComponent implements OnInit {

  items: any = [

  ];
  total: any= [];
  runner_id: any;
  totalRating: any= [];


  constructor(private service: RunnerService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.runner_id=localStorage.getItem("runnerID");
    this.getTotal();
    this.getTotalRating();
  }

getTotal(){
  this.service.getTotal(this.runner_id).subscribe((res=>{
    this.total =res;
    console.log(this.total);
    
    
  }))
}

getTotalRating(){
  this.service.getTotalRating(this.runner_id).subscribe((res=>{
    this.totalRating =res;
    console.log(this.totalRating);
    
  }))
}
earnings(){
  this.router.navigateByUrl('/earnings',{replaceUrl:true});
}

request(){
  this.router.navigateByUrl('/requests',{replaceUrl:true});
}

jobs(){
  this.router.navigateByUrl('/jobs',{replaceUrl:true});
}

ratings(){
  this.router.navigateByUrl('/ratings',{replaceUrl:true});

}

}
