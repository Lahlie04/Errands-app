import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrandsService } from 'src/app/services/errands.service';
import { AddressService } from 'src/app/services/address.service';
import { Service } from 'src/app/interface/service';

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent implements OnInit {

//   items= [
//         { image: "../../../assets/images/Online Groceries-pana.png", name: "human1", desc:"design Driven for professional", cost:"50.40"},
//         // { img: "../../../assets/img/bg_banner1.jpg", title: "Slide 2", desc:"We craft digital experiances" }
        
//       ];
//   constructor() { }

//   ngOnInit(): void {
//   }

// }


clientId: any;
serviceId: any;
requestData:any = {};




constructor(private errandService:ErrandsService, private router:Router, private route: ActivatedRoute, private service:AddressService) { }
data:any;

ngOnInit(): void {
 this.getService()
 this.clientId=localStorage.getItem("clientID");
this.serviceId=localStorage.getItem("serviceID"); 
}



items: Service[] = [



];

myFunction(item: any){
console.log('Hello world');
localStorage.setItem("serviceID",item.id);

console.log(item.id);
this.addRequest()



this.router.navigateByUrl('/posting', {replaceUrl:true});


}
getService(){
  this.errandService.getService().subscribe((res:any)=>{
    console.log(res);
    this.items = res;
  });
}

addRequest(){

  this.requestData = {
  client_id: this.clientId,
  service_id : this.serviceId
  }

  let obj= this.service.addRequest(this.requestData);
  obj.subscribe((res:any)=>{
    console.log(res);
    
  })

  
  }

}


