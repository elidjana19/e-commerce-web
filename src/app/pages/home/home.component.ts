import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
// import the service we created
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ProductDetailsService) { }
  
  products:Products[]=[]

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.service.getProducts().subscribe((res)=>{
      this.products=res;
    })
  }


}
