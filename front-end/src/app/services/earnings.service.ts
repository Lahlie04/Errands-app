import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EarningsService {

  private baseUrl = 'http://localhost:4304/api/earnings/';
  
  constructor(private http:HttpClient){}



  getEarnings(runner_id:any):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${runner_id}`);
  
  
}

getTotal(runner_id:any):Observable<any>{
  return this.http.get<any>('http://localhost:4304/api/total/' + runner_id);
}

  }


