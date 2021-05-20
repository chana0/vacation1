import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { HomeownerService } from 'src/app/services/homeowner.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-consumer-login-page',
  templateUrl: './consumer-login-page.component.html',
  styleUrls: ['./consumer-login-page.component.css']
})
export class ConsumerLoginPageComponent implements OnInit {

  constructor(private router: Router, private consumerService: ConsumerService,
    public apartmentService: ApartmentService, public orderService: OrderService,
    public homeownerService: HomeownerService) { }

  ngOnInit(): void {
  }
  apartmentsId: Array<number> = new Array<number>();
  homeownersId: Array<number> = new Array<number>();
  index: number = -1;
  toConsumerRegistration() {
    this.router.navigate(["/newConsumerPage"]);
  }
  getConsumerByLogin(identification: FormGroup) {
    this.consumerService.GetConsumerByLogin(identification.value).subscribe(
      restartConsumer => {
        this.consumerService.currentConsumer = restartConsumer;
        if (this.consumerService.currentConsumer == null) {
          alert("אחד או יותר מהפריטים שהזנת שגוי")
        }
        else {
          this.furtherConsumersService();
        }
      },
      er => { alert(er.massege + "תקלה"); }
    )
  }
  furtherConsumersService() {
    this.consumerService.GetConsumersOrders().subscribe(
      orders => {
        this.orderService.orders = orders;
        if (this.orderService.orders.length == 0) {
          this.router.navigate(["/SerchDetails"]);
          return;
        }
        this.GetApartmentsAndHomeownersOfOrdersFromCurrentConsumer();
      },
      er => { alert(er.massege + "תקלה"); }
    )
  }
  GetApartmentsAndHomeownersOfOrdersFromCurrentConsumer() {
    this.index = -1;
    this.orderService.orders.forEach(order => {
      this.index++;
      this.apartmentsId[this.index] = order.apartmentId;
    });
    this.apartmentService.GetApartmentsByApartmentsId(this.apartmentsId).subscribe(
      apartments => {
        this.orderService.apartments = apartments;
        this.GetHomeownersOfOrdersFromCurrentConsumer();
      },
      er => { alert(er.massege + "תקלה"); }
    )
  }
  GetHomeownersOfOrdersFromCurrentConsumer() {
    this.index = -1;
    this.orderService.apartments.forEach(apartment => {
      this.index++;
      this.homeownersId[this.index] = apartment.homeownerId;
    });
    this.homeownerService.GetHomeownersByHomeownersId(this.homeownersId).subscribe(
      homeowners => {
        this.orderService.homeowners = homeowners;
        this.router.navigate(["/ConsumerOrdersDisplay"]);
      },
      er => { alert(er.massege + "תקלה"); }
    )
  }

}
