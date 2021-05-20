import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.identificationFormPlay();
  }
  identificationForm: FormGroup;
  @Output("check-login") checkLogin: EventEmitter<FormGroup> = new EventEmitter();
  identificationFormPlay() {
    this.identificationForm = new FormGroup({
      email: new FormControl("",),
      password: new FormControl("",)
    })
  }
  checkLoginFunc() {
    this.checkLogin.emit(this.identificationForm);
  }
}
