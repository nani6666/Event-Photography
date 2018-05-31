import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { Slider } from 'ngx-slider';
import { RestcalllService } from '../../services/apis/restcalll.service';
import * as $ from 'jquery' ;
declare var jQuery: any;

@Component({
  selector: 'app-imagelightbox',
  templateUrl: './imagelightbox.component.html',
  styleUrls: ['./imagelightbox.component.css']
})
export class ImagelightboxComponent implements OnInit , AfterViewInit {
   imgArr: any;
   modalImage: any;
   tokenval: any;
   public serverIP = '192.168.0.101';
   public slider = new Slider();
  constructor(private router: Router ,  private servicecall: RestcalllService) {
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
    this.slider.config.showDots = false;
    this.slider.config.showNavigator = true;
   }

  ngOnInit() {
    this.servicecall.gettoken();
    // console.log(localStorage.getItem('token'));
    const slideItems = [];
    // this.imgArr.forEach(ele => {
    //   slideItems.push({'src': ele.img , 'title': ele.title});
    // });

    $('#slideshow > div:gt(0)').hide();
         setInterval(function() {
       $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
         }, 3000);
     this.servicecall.getCall('/api/Slideshow/Get').subscribe(data => {
      //  console.log((<any>data)._body);
       const obj = JSON.parse((<any>data)._body) ;
       console.log(obj.images);
       obj.images.forEach(ele => {
        slideItems.push({'src': ele , 'title': ''});
      });
      this.imgArr = slideItems;
     console.log(this.imgArr);
      // console.log(slideItems);
     } , err => {

     });

   this.slider.items = slideItems;


  }
  ngAfterViewInit() {

  }

  lightbox(val) {
    console.log(val);
    document.getElementById('gallery').click();
   this.modalImage = val.img ;
  }


}
