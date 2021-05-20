import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../classes/apartment';
import { Homeowner } from '../classes/homeowner';
import { Order } from '../classes/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(public http: HttpClient) { }
  url = "https://localhost:44339/api/Order/";
  public orders: Array<Order>;
  apartments: Array<Apartment>;
  homeowners: Array<Homeowner>;
  order: Order;
  CheckIfTheApartmentIsAvailableOnTheRequeftedDate(startDate: Date, endDate: Date, apartmentId: number) {
    return this.http.get<boolean>(this.url + "CheckIfTheApartmentIsAvailableOnTheRequeftedDate/" +
      startDate + "/" + endDate + "/" + apartmentId);
  }
  PlaceAnOrder(order: Order) {
    return this.http.post<Order>(this.url + "PlaceAnOrder", order);
  }
  GetOrdersByHomeownerId(homeownerId: number): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.url + "GetOrdersByHomeownerId/" + homeownerId);
  }
}
