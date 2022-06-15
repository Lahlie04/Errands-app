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
  addComment(comData:any){
    return this.http.post<any>('http://localhost:4304/api/requests/' + comData.service_id, comData);
  }

  // router.post('/requests', controller.addRequest);


  
  addRequest(request:request){
    return this.http.post<any>('http://localhost:4304/api/requests', request);

  }
  

  getMaxId(client_id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:4304/api/maxId/${client_id}`);
  }


  
}
