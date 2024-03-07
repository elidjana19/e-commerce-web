import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import these two
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from 'src/app/mock-products';
import { Products } from 'src/app/products';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: CartServiceService) { }

  showData:any
  getId:any
  products = PRODUCTS

  ngOnInit(): void {

// get the id
    this.getId= this.param.snapshot.paramMap.get('id')
    console.log(this.getId)

    console.log(this.products)


    // filter the products array to find the one with this id. this retuns an array too
    if(this.getId){
      this.showData= this.products.find((value)=>{
        return value.id == this.getId
     
      })
      console.log(this.showData)
    }

     }
  


     addtoCart(product:Products){
      this.service.addtoCart(product)
     }




 



  

 

   
   
   

}
