import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public counter: any;
  itemPrice: any;
  checkoutDiv: boolean;
  favoritesDiv: boolean;
  cartDiv: boolean;
  productval: any;
  totalval: any;
  itemsArray: any;
  checkoutdisabled: boolean;
  constructor(private router: Router) {
    this.itemsArray = [];
    this.totalval = 0;

  }
  ngOnInit() {
    // this.favoritesDiv = true;
    this.productval = '';
    this.checkoutDiv = false;
    this.cartDiv =  true;
    this.counter = 0 ;
    this.itemPrice = 100;
    this.checkoutbtn();
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    if (this.counter >= 1) {
      this.counter -= 1;
    } else {
      this.counter = 0;
    }
  }
  checkout() {
    this.favoritesDiv = false;
    this.checkoutDiv = true;
    this.cartDiv =  false;
  }

  gotocart() {
    this.favoritesDiv = false;
    this.checkoutDiv = false;
    this.cartDiv =  true;
  }
  gotofavourtes() {
    this.favoritesDiv = true;
    this.checkoutDiv = false;
    this.cartDiv =  false;
  }
  getItems(val) {
   console.log(val);
  if (val == '4 × 5') {
    this.productval = 150;
    this.itemsArray.push({'name': '4 × 5' , 'price': 150});
   } else if (val == '6 × 7') {
    this.productval = 250;
    this.itemsArray.push({'name': '6 × 7' , 'price': 250});
   } else if (val == '8 × 9') {
    this.productval = 350;
    this.itemsArray.push({'name': '8 × 9' , 'price': 350});
   } else if (val == '25 × 60') {
    this.productval = 850;
    this.itemsArray.push({'name': '25 × 60' , 'price': 850});
  }

  this.totalval += this.productval ;
   // console.log(this.totalval);
   this.checkoutbtn();
  }

  deleteprod(val , ind) {
   console.log(val , ind);
   this.itemsArray.splice(ind , 1);
   if (this.totalval >= 150) {
    this.totalval -= val.price;
  } else {
    this.totalval = 0;
  }
  }

  checkoutbtn() {
    if (this.totalval === 0) {
      this.checkoutdisabled = true;
     } else {
       this.checkoutdisabled = false;
     }
  }

}
