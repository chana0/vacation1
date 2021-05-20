import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/classes/consumer';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-successful-insert-of-consumer',
  templateUrl: './successful-insert-of-consumer.component.html',
  styleUrls: ['./successful-insert-of-consumer.component.css']
})
export class SuccessfulInsertOfConsumerComponent implements OnInit {
  constructor(public consumerService: ConsumerService) { }
  ngOnInit(): void {
    this.currentConsumer = this.consumerService.registredConsumer;
  }
  currentConsumer: Consumer;
}
