import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { RestcalllService } from '../../services/apis/restcalll.service';
import * as $ from 'jquery' ;
declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tokenval: any;
  @ViewChild('jkeyboard') jkeyboard: ElementRef;
  constructor(private router: Router ,  private servicecall: RestcalllService) { }

  ngOnInit() {
  jQuery('#keyboard').jkeyboard({
    layout: 'english',
    input: $('#search_field')
  });
}

gettoken() {
  this.servicecall.getCall('api/Authentication/Token').subscribe(data => {
    const tokenObj = JSON.parse((<any>data)._body);
    console.log(tokenObj);
  } , err => {
   console.log('Error');
  });
 }


}
