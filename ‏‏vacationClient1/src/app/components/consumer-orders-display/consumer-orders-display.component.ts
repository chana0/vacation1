import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/classes/apartment';
import { Consumer } from 'src/app/classes/consumer';
import { Homeowner } from 'src/app/classes/homeowner';
import { Order } from 'src/app/classes/order';
import { ConsumerService } from 'src/app/services/consumer.service';
import { OrderService } from 'src/app/services/order.service';
import { HomeownerLoginPageComponent } from '../homeowner-login-page/homeowner-login-page.component';

@Component({
  selector: 'app-consumer-orders-display',
  templateUrl: './consumer-orders-display.component.html',
  styleUrls: ['./consumer-orders-display.component.css']
})
export class ConsumerOrdersDisplayComponent implements OnInit {

  constructor(public consumerService: ConsumerService, public orderService: OrderService) { }
  ngOnInit(): void {
    this.orders = this.orderService.orders;
    this.apartments = this.orderService.apartments;
    this.homeowners = this.orderService.homeowners;
    this.currentConsumer = this.consumerService.currentConsumer;
    this.arrayIndexPlay();
  }
  orders: Array<Order>;
  apartments: Array<Apartment>;
  homeowners: Array<Homeowner>;
  arrayIndex: Array<number> = new Array<number>();
  public currentConsumer: Consumer;
  arrayIndexPlay() {
    for (let index = 0; index < this.orders.length; index++) {
      this.arrayIndex.push(index);
    }
  }
}

