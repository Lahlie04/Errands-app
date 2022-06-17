import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css'],
})
export class PostingComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  clientId: any;
  serviceId: any;
  request_id: any;
  submitted: boolean | undefined;
  reqdata: any = {};
  addressData: any = {};

  comData: any = {};

  constructor(private requestService: RequestsService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      street_address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      comment: new FormControl('', [Validators.required]),
      city: new FormControl('', Validators.required),
      suburb: new FormControl('', Validators.required),
      postal_code: new FormControl('', [
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
      ]),
    });
    this.clientId = localStorage.getItem('clientID');
    this.serviceId = localStorage.getItem('serviceID');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'Your post is succesfully sent😉!', 'success');
  }

  getAddress() {
    console.log("get address function");
    
    this.requestService.addRequest(this.form.value).subscribe(
      (res: any) => {
        console.log('res here: 📍', res);
        let weRequest = {
          service_id: localStorage.getItem('serviceID'),
          client_id: localStorage.getItem('clientID'),
          address_id: res.id,
          comment: this.form.value['comment'],
        };

        console.log('new request: 👀', weRequest);
        this.requestService.populatingRequest(weRequest).subscribe(
          (res) => {
            console.log('successfully add request!')
            if (res)
              this.alertWithSuccess();
              this.router.navigateByUrl('/history',{replaceUrl:true});
          },
          (err) => {
            console.log('something went wrong!');
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //called on html to validate form control input
  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    console.log('onsubmit');
    
    this.submitted = true;
    //validation
    if (this.form.invalid) {
      return;
    }
    console.log('Form data: ', this.form.value);
    this.getAddress();
  }
}
