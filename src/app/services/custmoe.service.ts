import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustmoeService {

  constructor(private http:HttpClient) { }
  public getRequest<T>(url:string):Observable<T>{
    return this.http.get<T>(url);
  }
}
