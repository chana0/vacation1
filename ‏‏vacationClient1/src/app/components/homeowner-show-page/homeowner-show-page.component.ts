import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { formatDate, CalendarOptions, EventAddArg, EventDef, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import { Order } from 'src/app/classes/order';
import { HomeownerService } from 'src/app/services/homeowner.service';
import { OrderService } from 'src/app/services/order.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import heLocale from '@fullcalendar/core/locales/he';
@Component({
  selector: 'app-homeowner-show-page',
  templateUrl: './homeowner-show-page.component.html',
  styleUrls: ['./homeowner-show-page.component.css']
})
export class HomeownerShowPageComponent implements OnInit {
  constructor(public orderService: OrderService, public homeownerService: HomeownerService,
    public dialog: MatDialog) {
    this.ordersFill();
  }
  ngOnInit(): void {
  }
  orders: Array<Order>;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    fixedWeekCount: false,
    eventClick: this.seeOrderDetails.bind(this),
    locale: heLocale
  };
  ordersFill() {
    this.orderService.GetOrdersByHomeownerId(this.homeownerService.currentHomeowner.id).subscribe(
      orders => {
        this.orders = orders;
        this.continueFillingEvents();
      },
      er => { alert(er.massege + "תקלה"); }
    )
  }
  continueFillingEvents() {
    const events = this.orders.map(order => {
      const start = order.arrivalTime.toString().split("T")[0];
      const end = order.departureTime.toString().split("T")[0];
      return {
        start: start,
        end: end,
        display: 'background',
        backgroundColor: '#276197',
        source: order
      };
    });
    this.calendarOptions.events = events;
  }
  seeOrderDetails({ event }) {
    const order = event.extendedProps.source;
    this.orderService.order = order;
    this.dialog.open(OrderDetailsComponent);
  }
}

