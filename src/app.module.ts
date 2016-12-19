/*import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from './home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
*/

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Basic} from './Basic';

@NgModule({
  declarations: [Basic],
  bootstrap: [Basic],
  imports: [BrowserModule],
})
export class AppModule {}