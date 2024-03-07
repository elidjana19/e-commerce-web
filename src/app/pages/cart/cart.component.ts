import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  constructor(private service: CartServiceService) { }
  

 
  // To store products of card
products:any=[]
// To store quantity of products
grandTotal!:number

  
  ngOnInit(): void {
    this.service.getProduct().subscribe(data=>{
      this.products=data
      console.log(this.products)

      this.grandTotal= this.service.getTotalPrice()
    })
    
  }

  // removeItem(item:any){
  //   this.service.removeCartItem(item)
  // }


  emptyCart(){
    this.service.removeAllCart()
  }


  
}
