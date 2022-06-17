import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class RequestsService {

  private baseUrl = 'http://localhost:4304/api/requests';

  constructor(private http:HttpClient) { }
// Client making a new request

  // addRequest(request:any): Observable<any> {
  //   let newRequest
  //   let address_id = 0
  //   //get address
  //   this.http.post('http://localhost:4304/api/address', request)
  //   .subscribe(
  //     (res: any) => {
  //       console.log('initial res: ', res)

  //       //post new request with address_id
  //       let weRequest = {
  //         service_id: localStorage.getItem("serviceID"),
  //         client_id: localStorage.getItem("clientID"),
  //         address_id: res.id,
  //         comment: request.comment
  //       }
  //       console.log('we request here: ',weRequest);
        
  //       // newRequest = this.http.post<any>('http://localhost:4304/api/requests', weRequest);
  //     }, err => {
  //       console.log(err);
  //     }


  //   ) 

  //   return newRequest
  //   // return newRequest
  // }

  addRequest(request: any):Observable<any>{
    return this.http.post('http://localhost:4304/api/address', request);
  }

  populatingRequest(request: any): Observable<any>{
    return this.http.post<any>('http://localhost:4304/api/requests', request);
  }

getRequests():Observable<any> {
return this.http.get<any>(`${this.baseUrl}`)
}

accept(runner_id, id:any):Observable<any>{
  console.log({runner_id, id});
  
  return this.http.put<any>('http://localhost:4304/api/acceptRequest/', {runner_id, id});
}

}
