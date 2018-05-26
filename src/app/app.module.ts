import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'ngx-slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // IMPORT THE SLIDESHOW MODULE
import { AppComponent } from './app.component';
import { ImagelightboxComponent } from './components/imagelightbox/imagelightbox.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { FoldersComponent } from './components/folders/folders.component';
@NgModule({
  declarations: [
    AppComponent,
    ImagelightboxComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    FoldersComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule, HttpModule,
    HttpClientModule,
    SliderModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
