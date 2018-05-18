
import { Component } from '@angular/core';
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagelightboxComponent } from './components/imagelightbox/imagelightbox.component';
import { CartComponent } from './components/cart/cart.component';
import {LoginComponent} from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FoldersComponent } from './components/folders/folders.component';


// Route Configuration
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'event', component: ImagelightboxComponent },
    { path: 'cart', component: CartComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'folders', component: FoldersComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
