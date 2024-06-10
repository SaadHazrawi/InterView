import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../Module/Product';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 products!:IProduct[];
  constructor(private productservice: ProductService) {
  }
  ngOnInit(): void {
   this.productservice.getProducts().subscribe((req)=>{
    this.products=req;
    console.table(this.products);
   });
  }
}
