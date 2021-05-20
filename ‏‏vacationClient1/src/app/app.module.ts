import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NewConsumerComponent } from './components/new-consumer/new-consumer.component';
import { NewConsumerPageComponent } from './components/new-consumer-page/new-consumer-page.component';
import{VactionRoutingModule} from 'src/app/vaction-routing/vaction-routing.module';
import { NewHomeownerPageComponent } from './components/new-homeowner-page/new-homeowner-page.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { SuccessOfOrderComponent } from './components/success-of-order/success-of-order.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { NewHomeownerComponent } from './components/new-homeowner/new-homeowner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { SuccessfulInsertOfConsumerComponent } from './components/successful-insert-of-consumer/successful-insert-of-consumer.component';
import { ConsumerLoginPageComponent } from './components/consumer-login-page/consumer-login-page.component';
import { HomeownerLoginPageComponent } from './components/homeowner-login-page/homeowner-login-page.component';
import { SerchDetailsComponent } from './components/serch-details/serch-details.component';
import { DialogInterestInTheApartmentComponent } from './components/dialog-interest-in-the-apartment/dialog-interest-in-the-apartment.component';
import { HomeownerShowPageComponent } from './components/homeowner-show-page/homeowner-show-page.component';
import { SuccessfulInsertOfHomeownerComponent } from './components/successful-insert-of-homeowner/successful-insert-of-homeowner.component';
import { ConsumerOrdersDisplayComponent } from './components/consumer-orders-display/consumer-orders-display.component';
import { FileUploadModule } from 'ng2-file-upload';
//import{menu,js}from 'src/menu.js';
//import { CalendarComponent } from './components/calendar/calendar.component';


import { EventDefHash, EventDef, EventAddArg,EventApi } from '@fullcalendar/angular'; // useful for typechecking



//fullcalendar///
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { OrderDetailsComponent } from './components/order-details/order-details.component'; // a plugin
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
//fullcalendar///

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    SearchPageComponent,
    NewConsumerComponent,
    NewConsumerPageComponent,
    NewHomeownerPageComponent,
    NewHomeownerComponent,
    IdentificationComponent,
    SuccessOfOrderComponent,
    SuccessfulInsertOfConsumerComponent,
    ConsumerLoginPageComponent,
    HomeownerLoginPageComponent,
    SerchDetailsComponent,
    DialogInterestInTheApartmentComponent,
    HomeownerShowPageComponent,
    SuccessfulInsertOfHomeownerComponent,
    ConsumerOrdersDisplayComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    VactionRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    FileUploadModule,
    //fullcalendar//
    FullCalendarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }) 
    
    //fullcalendar//
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

