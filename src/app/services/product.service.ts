import { Injectable } from '@angular/core';
import { CustmoeService } from './custmoe.service';
import { Observable } from 'rxjs';
import { IProduct } from '../Module/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private custome:CustmoeService) { }
  url:string="assets/product.json";
  public getProducts():Observable<IProduct[]>{
    return this.custome.getRequest<IProduct[]>(this.url);
  }
}
