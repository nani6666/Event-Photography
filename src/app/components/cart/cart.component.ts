import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestcalllService } from '../../services/apis/restcalll.service';
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
  tokenval: any;
  favorties: any;
  productobj: any;
  constructor(private router: Router , private servicecall: RestcalllService) {
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
    this.getfavorites();
    this.getproducts();
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
   this.itemsArray.push({'name': val.descriptionShort , 'price': val.priceLevel.priceEach});
   this.totalval += val.priceLevel.priceEach ;
   // console.log(this.totalval);
   this.checkoutbtn();
  }

  deleteprod(val , ind) {
   console.log(val , ind);
   this.itemsArray.splice(ind , 1);
   if (this.totalval >= 1) {
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

  // gettoken() {
  //   this.servicecall.getCall('api/Authentication/Token').subscribe(data => {
  //     const tokenObj = JSON.parse((<any>data)._body);
  //     console.log(tokenObj);
  //   } , err => {
  //    console.log('Error');
  //   });
  //  }

  getfavorites() {
    const nameval = localStorage.getItem('name');
     this.servicecall.getCall('api/Favorites/Get?cartNameId=' + nameval ).subscribe(data => {
      const tokenObj = JSON.parse((<any>data)._body);
      this.favorties = tokenObj.cartFavs ;
      console.log(this.favorties);
    } , err => {
     console.log('Error');
    });
  }

  getproducts() {
    this.servicecall.getCall('api/Products/Get').subscribe(data => {
       this.productobj = JSON.parse((<any>data)._body);
       console.log(this.productobj);
    } , err => {

    });
   }

   deletefavorite(val) {
     console.log(val);
    this.servicecall.postCall('/api/Favorites/Delete?cartFavId=' + val.cartFavId , '').subscribe(data => {
      const response = (<any>data)._body;
      console.log(response);
   } , err => {

   });
   }
}
