import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { SearchPageComponent } from '../components/search-page/search-page.component';
import { NewConsumerPageComponent } from '../components/new-consumer-page/new-consumer-page.component';
import { NewHomeownerPageComponent } from '../components/new-homeowner-page/new-homeowner-page.component';
import { SuccessfulInsertOfConsumerComponent } from '../components/successful-insert-of-consumer/successful-insert-of-consumer.component';
import { ConsumerLoginPageComponent } from '../components/consumer-login-page/consumer-login-page.component';
import { HomeownerLoginPageComponent } from '../components/homeowner-login-page/homeowner-login-page.component';
import { SerchDetailsComponent } from '../components/serch-details/serch-details.component';
import { HomeownerShowPageComponent } from '../components/homeowner-show-page/homeowner-show-page.component';
import { ConsumerOrdersDisplayComponent } from '../components/consumer-orders-display/consumer-orders-display.component';
const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "homePage", component: HomePageComponent },
  { path: "searchPage", component: SearchPageComponent },
  { path: "SerchDetails", component: SerchDetailsComponent },
  { path: "consumerLoginPage", component: ConsumerLoginPageComponent },
  { path: "homeownerLoginPage", component: HomeownerLoginPageComponent },
  { path: "newConsumerPage", component: NewConsumerPageComponent },
  { path: "successfulInsertOfConsumer", component: SuccessfulInsertOfConsumerComponent },
  {
    path: "newHomeownerPage", component: NewHomeownerPageComponent,
  },
  { path: "HomeownerShowPage", component: HomeownerShowPageComponent },
  { path: "ConsumerOrdersDisplay", component: ConsumerOrdersDisplayComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class VactionRoutingModule { }