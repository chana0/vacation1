import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/classes/consumer';
import { Order } from 'src/app/classes/order';
import { ConsumerService } from 'src/app/services/consumer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  constructor(private consumerService: ConsumerService, public orderService: OrderService) {
    this.fillTheOrderObject();
    this.fillTheConsumerObject();
  }
  ngOnInit(): void {
  }
  order: Order;
  consumer: Consumer;
  fillTheConsumerObject() {
    this.consumerService.GetConsumerById(this.orderService.order.consumerId).subscribe(
      consumer => { this.consumer = consumer; },
      er => { alert(er.massege + "תקלה"); }
    )
  }
  fillTheOrderObject() {
    this.order = this.orderService.order;
  }
}