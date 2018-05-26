import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit() {
    jQuery('#keyboard').jkeyboard({
      layout: 'english',
      input: $('#search_field')
    });
    this.eventsection = true ;
    this.gamesection = false ;
    this.thumbnailsSection =  false ;
    this.imageSection = false;
    this.eventsArray = ['Cras justo odio' , 'Dapibus ac facilisis in' , 'Morbi leo risus' ,
                         'Porta ac consectetur ac' , 'Vestibulum at eros' , '123 ac'];
     this.gameArray = ['one' , 'two', 'three' , 'four' , 'five' , 'six'];
     this.thumbnailsArray = [
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

   getevents() {
    this.eventsection = true ;
    this.gamesection = false ;
    this.thumbnailsSection =  false ;
    this.imageSection = false;
   }
   getgames(val) {
    console.log(val);
    this.eventsection = false ;
    this.gamesection = true ;
    this.thumbnailsSection =  false ;
    this.imageSection = false;
   }
   getthumbanils(val) {
    this.eventsection = false ;
    this.gamesection = false ;
    this.thumbnailsSection =  true ;
    this.imageSection = false;
   }

   getImages(val) {
     this.imgitem = val.img;
    this.eventsection = false ;
    this.gamesection = false ;
    this.thumbnailsSection =  false ;
    this.imageSection = true;
   }

  startnavigate() {
    this.router.navigate(['/login']);
  }
}
