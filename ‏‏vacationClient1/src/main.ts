import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import 'core-js/es6/reflect';
//import 'core-js/es7/reflect';
//import 'zone.js/dist/zone';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';




if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




  @NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule 
    ],
    bootstrap: [
    ]
  })
  export class BootstrapModule {}
  
  
  platformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  
    // Otherwise, log the boot error
  }).catch(err => console.error(err));
  