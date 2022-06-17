import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, address, request } from '../interface/user'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = 'http://localhost:4304/api/address';

  constructor(private http:HttpClient) { }

  getAddress(address:address):Observable<any>{

    return this.http.post<any>(`${this.baseUrl}`,address);
  }

  // router.post('/requests', controller.addRequest);


  

  

  
}
