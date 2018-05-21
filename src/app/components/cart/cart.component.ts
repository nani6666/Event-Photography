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
  constructor(private router: Router) { }
  ngOnInit() {
    this.checkoutDiv = false;
    this.counter = 0 ;
    this.itemPrice = 100;
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
    this.checkoutDiv = true;
  }

}
