import { Component, OnInit } from '@angular/core';
import { Homeowner } from 'src/app/classes/homeowner';
import { HomeownerService } from 'src/app/services/homeowner.service';

@Component({
  selector: 'app-successful-insert-of-homeowner',
  templateUrl: './successful-insert-of-homeowner.component.html',
  styleUrls: ['./successful-insert-of-homeowner.component.css']
})
export class SuccessfulInsertOfHomeownerComponent implements OnInit {
  constructor(public homeownerService: HomeownerService) { }
  ngOnInit(): void {
    this.registredHomeowner = this.homeownerService.registredHomeowner;
  }
  registredHomeowner: Homeowner;
}
