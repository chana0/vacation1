import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from '../classes/consumer';
import { Order } from '../classes/order';
import { OrderService } from './order.service';
@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  constructor(public h: HttpClient) { }
  url = "https://localhost:44339/api/Consumer/";
  public currentConsumer: Consumer;
  public registredConsumer: Consumer;
  InsertConsumer(consumer: Consumer): Observable<Consumer> {
    return this.h.post<Consumer>(this.url + "InsertConsumer", consumer)
  }
  GetConsumerByLogin(identification): Observable<Consumer> {
    return this.h.post<Consumer>(this.url + "GetConsumerByLogin", identification);
  }
  CheckThatTheEmailIsAvailable(email: string): Observable<boolean> {
    return this.h.post<boolean>(this.url + "CheckThatTheEmailIsAvailable", { "email": email })
  }
  GetConsumerById(id: number): Observable<Consumer> {
    return this.h.get<Consumer>(this.url + "GetConsumerById/" + id)
  }
  GetConsumersOrders() {
    return this.h.get<Array<Order>>(this.url + "GetConsumersOrders/" + this.currentConsumer.id);
  }
}
