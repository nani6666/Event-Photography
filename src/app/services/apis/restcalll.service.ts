import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import { map } from 'rxjs/operators';
import { Headers, Http, HttpModule, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
declare const jQuery: any;
const api = 'http://192.168.0.101/',
serverIP = '192.168.0.101';
@Injectable({
  providedIn: 'root'
})
export class RestcalllService {
  headers: any;
  tokenval: any;
  constructor(private _http: Http) { }

  /* get call starts */
  getCallgeneraltoken(url): Observable<any> {
    return this._http.get(api + url).pipe(map((res: Response) => res))
    .pipe(catchError((error: any) => error));
  }
/* get call ends */
gettoken() {
  this.getCallgeneraltoken('api/Authentication/Token').subscribe(data => {
   const tokenObj = JSON.parse((<any>data)._body);
   localStorage.setItem('token' ,  'bearer  ' + tokenObj.token);
   this.tokenval =  tokenObj.token;
   console.log(this.tokenval);
 } , err => {
  console.log('Error');
 });
}
  /* get call starts */
  getCall(url): Observable<any> {
    console.log('testing ' , this.tokenval);
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem('token'));
    return this._http.get(api + url , {headers: this.headers}).pipe(map((res: Response) => res))
    .pipe(catchError((error: any) => error));
  }
/* get call ends */

   /* post calls starts */
   postCall(url, data): Observable<any[]> {
    this.gettoken();
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem('token'));
    return this._http.post(api + url, data , {headers: this.headers})
      .pipe(map((res: Response) => res.json()))
      .pipe(catchError((error: any) => Observable.throw(error || 'Server error')));
     }
  /*post calls Ends*/


}
