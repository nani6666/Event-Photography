import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestcalllService } from '../../services/apis/restcalll.service';
import * as $ from 'jquery' ;
declare var jQuery: any;
@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
   eventsArray: any ;
   eventsection: boolean ;
   gamesection: boolean ;
   thumbnailsSection: boolean;
   imageSection: boolean;
   thumbnailsArray: any;
   imgitem: any;
   gameArray: any ;
   tokenval: any;
   eventsval: any;
   gamesval: any;
   thumbnailsval: any;
   inputval: any;
   buttonsUser: boolean;
   productObj: any;
   public serverIP = '192.168.0.101';


  constructor(private router: Router , private servicecall: RestcalllService) {
  }

  ngOnInit() {
    // this.gettoken();
    jQuery('#keyboard').jkeyboard({
      layout: 'english',
      input: $('#search_field')
    });
    this.eventsection = true ;
    this.gamesection = false ;
    this.thumbnailsSection =  false ;
    this.imageSection = false;
    this.eventsArray = [];
     this.gameArray = [];
     this.thumbnailsArray = [];

     this.getEventSApi();
     this.getproducts();
     if (localStorage.getItem('Id') !== null) {
      this.buttonsUser =  false;
     } else {
      this.buttonsUser =  true;
     }
    // this.keyboardmodalfun();
   }

   getevents() {
    this.eventsection = true ;
    this.gamesection = false ;
    this.thumbnailsSection =  false ;
    this.imageSection = false;
    this.getEventSApi();
   }
   getgames(val) {
    if (val == '') {
      val =  this.eventsval ;
    } else {
     this.eventsval = val ;
    }
    console.log(val);
    this.eventsection = false ;
    this.gamesection = true ;
    this.thumbnailsSection =  false ;
    this.imageSection = false;
    this.servicecall.getCall('api/Folders/GetGames?evnt=' + this.eventsval).subscribe(data => {
      //  console.log((<any>data)._body);
       const obj = JSON.parse((<any>data)._body) ;
       this.gameArray = obj.games;
     //  console.log(obj.eventNames);
     } , err => {

     });
   }
   getthumbanils(val) {
     console.log(val);
     if (val == '') {
       val =  this.gamesval ;
     } else {
      this.gamesval = val ;
     }
    this.eventsection = false ;
    this.gamesection = false ;
    this.thumbnailsSection =  true ;
    this.imageSection = false;
    this.servicecall.getCall('/api/Folders/GetThumbnails?evnt=' +  this.eventsval + '&game=' + this.gamesval).subscribe(data => {
      //  console.log((<any>data)._body);&game=Default"
       const obj = JSON.parse((<any>data)._body) ;
       console.log(obj.images);
       this.thumbnailsArray = obj.images;
     //  console.log(obj.eventNames);
     } , err => {

     });
   }

   getImages(val) {
     console.log(val);
     this.imgitem = val;
    this.eventsection = false ;
    this.gamesection = false ;
    this.thumbnailsSection =  false ;
    this.imageSection = true;
   }

  startnavigate() {
    this.router.navigate(['/login']);
  }

  getEventSApi() {
   this.servicecall.getCall('api/Folders/GetEvents').subscribe(data => {
    //  console.log((<any>data)._body);
     const obj = JSON.parse((<any>data)._body) ;
     this.eventsArray = obj.eventNames;
   //  console.log(obj.eventNames);
   } , err => {

   });
  }

  keyboardmodalfun() {
    console.log(localStorage.getItem('Id'));
    if (localStorage.getItem('Id') !== null) {
      this.buttonsUser =  false;
      this.inserttofavroties();
    } else {
      this.inputval = '';
      document.getElementById('keyboardclick').click();
    }

  }


  addtoFavorites() {
    document.getElementById('okbtn').setAttribute('data-dismiss' , 'modal');
    const obj = {
      'cartNameId': this.inputval,
      'imagePath': this.imgitem
    };
    console.log(obj);
    this.servicecall.postCall('api/Favorites/Create' , obj).subscribe(data => {
      console.log(data);
      localStorage.setItem('name' , this.inputval);
      localStorage.setItem('Id' , (<any>data).cartMasterId);
    } , err => {
      localStorage.setItem('name' , this.inputval);
      alert('Name Already Exits');
      console.log('Error');
     this.getfavorites();
    });
   }

   logout() {
     localStorage.removeItem('name');
     localStorage.removeItem('Id');
   this.router.navigate(['/login']);
   }

  inserttofavroties() {
    const obj = {
      'cartMasterId': localStorage.getItem('Id') !== null ? localStorage.getItem('Id') : '' ,
      'imagePath': 'string'
    };
    console.log(obj);
    this.servicecall.postCall('api/Favorites/Create' , obj).subscribe(data => {
      console.log(data);
      localStorage.setItem('Id' , (<any>data).cartMasterId);
    } , err => {
      console.log('Error');
    });
  }

  getfavorites() {
   this.servicecall.getCall('api/Favorites/Get?cartNameId=' + this.inputval).subscribe(data => {
     console.log((<any>data)._body);
     if ((<any>data)._body !== '') {
      this.buttonsUser =  false;
     } else {
      this.buttonsUser =  true;
     }
  } , err => {

  });
  }

  getproducts() {
   this.servicecall.getCall('api/Products/Get').subscribe(data => {
      this.productObj = JSON.parse((<any>data)._body);
      console.log(this.productObj);
   } , err => {

   });
  }

}
