import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RatingsService } from 'src/app/services/ratings.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
})
export class RateComponent implements OnInit {
  form: any = FormGroup;

  rating3 = 0;

  rateData: any = {
    runner_id: 'any',
    client_id: 'any',
    rating: 'any',
    reason: 'any',
    request_id: 'any',
  };

  constructor(private fb: FormBuilder, private service: RatingsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      rating: ['', Validators.required],
      // id: [localStorage.getItem('id')],
      reason: [''],
      runner_id: [localStorage.getItem('runnerID')],
      client_id: [localStorage.getItem('clientID')],
      request_id: [localStorage.getItem('request_id')]
    });
    // this.rateData.runner_id = localStorage.getItem('runnerID');
    // this.rateData.client_id = localStorage.getItem('clientID');
    // this.rateData.request_id = localStorage.getItem('request_id');
  }

  rate() {
    // this.rateData.reason = this.form.value.reason;
    // this.rateData.rating = this.form.value.rating;
    // this.rateData.request_id = localStorage.getItem('request_id');

    console.log(this.form.value);

    this.service.RateRunner(this.form.value).subscribe((res) => {
      console.log(res);
      this.form.value.rating = res;

      return Swal.fire({
        title: 'Success!',
        text: 'Successfully Rated',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    });
  }
}
