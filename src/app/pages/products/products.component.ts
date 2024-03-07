import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { Products } from 'src/app/products';
import { PRODUCTS } from 'src/app/mock-products';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductDetailsService) { }
  
  // get all products
  products:Products[]=PRODUCTS;

  
  ngOnInit(): void {
    // this.products=this.service.productsList
    
    // this.getProducts()

  }

  // getProducts(){
  //   this.service.getProducts().subscribe((res)=>{
  //     this.products=res;
  //   })
  // }




}
