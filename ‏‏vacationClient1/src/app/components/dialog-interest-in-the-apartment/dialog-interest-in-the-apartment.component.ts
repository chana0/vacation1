import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/classes/apartment';
import { Consumer } from 'src/app/classes/consumer';
import { Homeowner } from 'src/app/classes/homeowner';
import { Order } from 'src/app/classes/order';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { HomeownerService } from 'src/app/services/homeowner.service';
import { OrderService } from 'src/app/services/order.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-interest-in-the-apartment',
  templateUrl: './dialog-interest-in-the-apartment.component.html',
  styleUrls: ['./dialog-interest-in-the-apartment.component.css']
})
export class DialogInterestInTheApartmentComponent implements OnInit {

  constructor(public orderService: OrderService, public apartmentService: ApartmentService,
    public consumerService: ConsumerService, public homeownerService: HomeownerService,
    private router: Router, public dialog: MatDialog) {
    this.currentConsumer = consumerService.currentConsumer;
    this.apartmentInterestedIn = apartmentService.apartmentInterestedIn;
    this.homeownerOfApartmentInterestedIn = apartmentService.homeownerOfApartmentInterestedIn;
  }

  ngOnInit(): void {
  }
  startDate: Date = new Date();
  endDate: Date = null;
  test: boolean;
  order: Order = new Order();
  public currentConsumer: Consumer;
  public apartmentInterestedIn: Apartment;
  homeownerOfApartmentInterestedIn: Homeowner;
  homeownerId: Array<number> = new Array<number>();
  public d: Date = new Date();
  ok() {
    if (this.currentConsumer == null) {
      alert("לא ניתן לבצע הזמנה ללא הזדהות כניסה למערכת ,עליך להזדהות תחילה");
      this.router.navigate(["/consumerLoginPage"]);
      return;
    }
    this.orderService.CheckIfTheApartmentIsAvailableOnTheRequeftedDate
      (this.startDate, this.endDate, this.apartmentService.apartmentInterestedIn.id).subscribe(
        answer => {
          this.test = answer;
          if (this.test == false) {
            alert("התאריך תפוס ביכולתך לנסות תאריך אחר או דירה אחרת");
            return;
          }
          this.placeAnOrder();
        },
        er => { alert(er.massege + "תקלה"); }
      )
  }
  placeAnOrder() {
    this.order.apartmentId = this.apartmentService.apartmentInterestedIn.id;
    this.order.consumerId = this.consumerService.currentConsumer.id;
    this.order.arrivalTime = this.startDate;
    this.order.departureTime = this.endDate;
    this.orderService.PlaceAnOrder(this.order).subscribe(
      currentOrder => {
        alert("ההזמנה התבצעה בהצלחה!");
        this.orderService.orders.push(currentOrder);
        this.orderService.apartments.push(this.apartmentInterestedIn);
        this.orderService.homeowners.push(this.homeownerOfApartmentInterestedIn);
        this.router.navigate(["/ConsumerOrdersDisplay"]);
        this.dialog.closeAll();
      },
      er => { alert(er.massege + "תקלה"); }
    )
  }

}
