import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {
  }
  viewM = false;
  ngOnInit(): void {
  }
  viewMenu() {
    this.viewM = !this.viewM;
  }
  passingToHomePage() {
    this.router.navigate(["/"]);
    this.viewMenu();
  }
  passingToSearchPage() {
    this.router.navigate(["/SerchDetails"]);
    this.viewMenu();
  }
  passingToConsumersEntrancePage() {
    this.router.navigate(["/consumerLoginPage"]);
    this.viewMenu();
  }
  passingToHouseOwnersEntrancePage() {
    this.router.navigate(["/homeownerLoginPage"]);
    this.viewMenu();
  }
}