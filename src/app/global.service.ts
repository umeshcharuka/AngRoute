import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public http:HttpClient ) { }



  PrimaryAPI="http://localhost:9999/";

  

  GetALLCustomer():Observable<any>{
 
    var time = new Date();
 
    let url=`${this.PrimaryAPI}/Customer/Get?&tsp=${time}`;
    return this.http.get<any>(url);




  }
}
