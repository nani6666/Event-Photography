import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagelightbox',
  templateUrl: './imagelightbox.component.html',
  styleUrls: ['./imagelightbox.component.css']
})
export class ImagelightboxComponent implements OnInit {
   imgArr: any;
   modalImage: any;
  constructor() {
    this.imgArr = [
      {

        'img': 'https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2016/02/09155708/AB2_gl_frg_optim.png',
        'title': 'Sunrise'
      }, {
        // tslint:disable-next-line:max-line-length
        'img': 'https://d2uqfpnktc64mn.cloudfront.net/uploads/ckeditor_assets/pictures/18430/content_c1-Image-by-Kilian-Schonberger-The-Bridge-Brothers-Grimm-Wanderings-series.jpg',
        'title': 'Lake'
      }, {
        'img': 'https://i.pinimg.com/originals/36/56/a6/3656a66c3417c38b8175328c6396eeba.jpg',
        'title': 'Ocean Sun set'
      }, {
        'img': 'http://latesthdwallpapers1.com/wp-content/uploads/2015/01/Nature-Landscapes-2.jpg',
        'title': 'Beautiful Landscape1'
      }, {
        // tslint:disable-next-line:max-line-length
        'img': 'http://www.fandung.com/8/2015/03/great-modern-design-of-the-tropical-islands-caribbean-that-has-nice-white-sands-can-add-the-beauty-inside-with-bue-beach-inside-make-it-seems-nice-spot-inside-657x411.jpg',
        'title': 'Island'
      },{
        // tslint:disable-next-line:max-line-length
        'img': 'https://s1.cdn.autoevolution.com/images/news/2013-harley-davidson-night-rod-special-spawn-of-darkness-photo-gallery-51000_1.jpg',
        'title': 'Harley Davidson'
      }


     ];
   }

  ngOnInit() {

  }

  lightbox(val) {
    console.log(val);
    document.getElementById('gallery').click();
   this.modalImage = val.img ;
  }
}
