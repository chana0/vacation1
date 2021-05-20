import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  OnInit,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators
} from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Consumer } from 'src/app/classes/consumer';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessfulInsertOfConsumerComponent } from '../successful-insert-of-consumer/successful-insert-of-consumer.component';
@Component({
  selector: 'app-new-consumer',
  templateUrl: './new-consumer.component.html',
  styleUrls: ['./new-consumer.component.css'],
})
export class NewConsumerComponent implements OnInit {

  constructor(public consumerService: ConsumerService, private router: Router, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.consumerFormPlay();
  }
  consumerForm: FormGroup;
  consumer: Consumer = new Consumer;
  emailIsAvailable: boolean = true;
  emailValid: boolean = true;
  consumerFormPlay() {
    this.consumerForm = new FormGroup({
      firstName: new FormControl("", [Validators.required,
      Validators.pattern('^(([א-ת]|"){2,20}([ ]||[א-ת]|")*)$')]),
      lastName: new FormControl("", [Validators.required,
      Validators.pattern('^(([א-ת]|"){2,20}([ ]||[א-ת]|")*)$')]),
      tel: new FormControl("", [Validators.pattern("^[0]\\d{1,2}(-|)\\d{7}$"), Validators.required]),
      pel: new FormControl("", [Validators.pattern("^[0]\\d{1,2}(-|)\\d{7}$"), Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      city: new FormControl("", [Validators.required,
      Validators.pattern('^([א-ת]{2,30}([ ]||[א-ת])*)$')]),
      street: new FormControl("", [Validators.required,
      Validators.pattern('^([א-ת]{2,30}([ ]||[א-ת])*)$')]),
      buildingNumber: new FormControl("", [Validators.required, Validators.min(1)]),
      zipCode: new FormControl("", Validators.pattern('^\\d{5,7}$')),
      identityCode: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required,
      Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$")])
    })
  }
  insert() {
    this.consumerService.CheckThatTheEmailIsAvailable(this.consumerForm.value.contactInformation.email).
      subscribe(
        answer => {
          if (answer == true) {
            this.emailIsAvailable = true;
            this.extensionInserting();
          }
          else {
            this.emailIsAvailable = false;
            alert("כתובת מייל זו קיימת כבר תחת משתמש רשום ,רשום כתובת מייל שונה או היכנס כמשתמש רשום")
            return;
          }
        },
        er => { alert(er.massege + "תקלה"); }
      );

  }
  extensionInserting() {
    this.consumer.firstName = this.consumerForm.value.name.firstName;
    this.consumer.lastName = this.consumerForm.value.name.lastName;
    this.consumer.tel = this.consumerForm.value.contactInformation.tel;
    this.consumer.pel = this.consumerForm.value.contactInformation.pel;
    this.consumer.email = this.consumerForm.value.contactInformation.email;
    this.consumer.city = this.consumerForm.value.address.city;
    this.consumer.street = this.consumerForm.value.address.street;
    this.consumer.buildingNumber = this.consumerForm.value.address.buildingNumber;
    this.consumer.zipCode = this.consumerForm.value.address.zipCode;
    this.consumer.identityCode = this.consumerForm.value.identification.identityCode;
    this.consumer.password = this.consumerForm.value.identification.password;
    this.consumerService.InsertConsumer(this.consumer).subscribe(
      restartConsumer => {
        this.consumerService.registredConsumer = restartConsumer;
        this.router.navigate(["/consumerLoginPage"]);
        this.openDialog();
      },
      er => { alert(er.massege + "תקלה"); }
    );
  }
  openDialog() {
    this.dialog.open(SuccessfulInsertOfConsumerComponent);
  }
}



