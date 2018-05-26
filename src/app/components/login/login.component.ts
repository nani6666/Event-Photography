import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery' ;
declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('jkeyboard') jkeyboard: ElementRef;
  constructor(private router: Router) { }

  ngOnInit() {
  jQuery('#keyboard').jkeyboard({
    layout: 'english',
    input: $('#search_field')
  });
}



}
