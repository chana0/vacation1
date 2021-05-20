import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Apartment } from 'src/app/classes/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';
import { HomeownerService } from 'src/app/services/homeowner.service';
import { Homeowner } from 'src/app/classes/homeowner';
import { SuccessfulInsertOfHomeownerComponent } from '../successful-insert-of-homeowner/successful-insert-of-homeowner.component';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-new-homeowner',
  templateUrl: './new-homeowner.component.html',
  styleUrls: ['./new-homeowner.component.css']
})
export class NewHomeownerComponent implements OnInit {
  homeownerForm: FormGroup;
  apartment: Apartment = new Apartment();
  isOpenApartmentForm: boolean = false;
  apartmentForm: FormGroup;
  homeowner: Homeowner = new Homeowner();
  apartmentIsNotNull = false;
  emailIsAvailable: boolean;
  isImageSaved: boolean;
  cardImageBase64: any;
  apartmentObjectFill: boolean;
  constructor(private router: Router, public dialog: MatDialog,
    public homeownerService: HomeownerService, public apartmentService: ApartmentService) {
    this.apartment = new Apartment();
    this.homeownerFormPlay();
    this.apartmentFormPlay();
    this.apartmentObjectFill = false;
  }
  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(SuccessfulInsertOfHomeownerComponent);
  }
  homeownerFormPlay() {
    this.homeownerForm = new FormGroup({
      firstName: new FormControl("", [Validators.required,
      Validators.pattern('^(([א-ת]|"){2,20}([ ]||[א-ת]|")*)$')]),
      lastName: new FormControl("", [Validators.required,
      Validators.pattern('^(([א-ת]|"){2,20}([ ]||[א-ת]|")*)$')]),
      telephon: new FormControl("", [Validators.pattern("^[0]\\d{1,2}(-|)\\d{7}$"), Validators.required]),
      pelephon: new FormControl("", [Validators.pattern("^[0]\\d{1,2}(-|)\\d{7}$"), Validators.required]),
      email: new FormControl("", [Validators.email, Validators.required]),
      city: new FormControl("", [Validators.required,
      Validators.pattern('^([א-ת]{2,30}([ ]||[א-ת])*)$')]),
      street: new FormControl("", [Validators.required,
      Validators.pattern('^([א-ת]{2,40}([ ]||[א-ת])*)$')]),
      buildingNumber: new FormControl("", [Validators.required, Validators.min(1)]),
      zipCode: new FormControl("", Validators.pattern('^\\d{5,7}$')),
      identityCode: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required,
      Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$")])
    })
  }
  transferToInsertApartment() {
    this.isOpenApartmentForm = true;
  }
  apartmentFormPlay() {
    this.apartmentForm = new FormGroup({
      name: new FormControl("", [Validators.required,
      Validators.pattern('^(([א-ת]|"){2,20}([ ]||[א-ת]|")*)$')]),
      street: new FormControl("", [Validators.required,
      Validators.pattern('^([א-ת]{2,40}([ ]||[א-ת])*)$')]),
      buildingNumber: new FormControl("", [Validators.required, Validators.min(1)]),
      floor: new FormControl("", [Validators.required, Validators.max(100), Validators.min(-100)]),
      neighborhood: new FormControl("", [Validators.required,
      Validators.pattern('^([א-ת]{2,20}([ ]||[א-ת])*)$')]),
      city: new FormControl("", [Validators.required,
      Validators.pattern('^([א-ת]{2,20}([ ]||[א-ת])*)$')]),
      zipCode: new FormControl("", Validators.pattern('^\\d{5,7}$')),
      amountOfRooms: new FormControl("", [Validators.max(30), Validators.required, Validators.min(0)]),
      amountOfFloor: new FormControl("", [Validators.max(4), Validators.min(1), Validators.required]),
      beds: new FormControl("", [Validators.max(50), Validators.min(0), Validators.required]),
      yard: new FormControl("",),
      jacuzzi: new FormControl(""),
      pool: new FormControl(""),
      aSynagogueNearby: new FormControl("",),
      eruvAnTheNeighborhood: new FormControl("",),
      price: new FormGroup({
        pricePerNight: new FormControl(""),
        weekendPrice: new FormControl(""),
        priceForSaturdayNight: new FormControl("")
      }),
      moreDetails: new FormControl("",),
      picture: new FormControl("", Validators.required)
    })
  }
  complete() {
    this.apartment = this.apartmentForm.value;
    this.isOpenApartmentForm = false;
    this.apartmentIsNotNull = true;
    this.apartmentObjectFill = true;
  }
  insertApartment() {
    this.apartment.homeownerId = this.homeownerService.registredHomeowner.id;
    this.apartmentService.InsertApartment(this.apartment).subscribe(
      restartApartment => {
        this.router.navigate(["/homeownerLoginPage"]);
        this.openDialog();
      },
      er => { alert(er.massege + "תקלה בהוספת הדירה"); }
    );
  }
  extensionInserting() {
    this.homeowner.firstName = this.homeownerForm.value.name.firstName;
    this.homeowner.lastName = this.homeownerForm.value.name.lastName;
    this.homeowner.tel = this.homeownerForm.value.contactInformation.telephon;
    this.homeowner.pel = this.homeownerForm.value.contactInformation.pelephon;
    this.homeowner.email = this.homeownerForm.value.contactInformation.email;
    this.homeowner.city = this.homeownerForm.value.address.city;
    this.homeowner.street = this.homeownerForm.value.address.street;
    this.homeowner.buildingNumber = this.homeownerForm.value.address.buildingNumber;
    this.homeowner.zipCode = this.homeownerForm.value.address.zipCode;
    this.homeowner.identityCode = this.homeownerForm.value.identification.identityCode;
    this.homeowner.password = this.homeownerForm.value.identification.password;
    this.apartment.name = this.apartmentForm.value.name;
    this.apartment.street = this.apartmentForm.value.address.street;
    this.apartment.buildingNumber = this.apartmentForm.value.address.buildingNumber;
    this.apartment.floor = this.apartmentForm.value.address.floor;
    this.apartment.neighborhood = this.apartmentForm.value.address.neighborhood;
    this.apartment.city = this.apartmentForm.value.address.city;
    this.apartment.zipCode = this.apartmentForm.value.address.zipCode;
    this.apartment.amountOfRooms = this.apartmentForm.value.amountOfRooms;
    this.apartment.beds = this.apartmentForm.value.beds;
    this.apartment.yard = this.apartmentForm.value.yard;
    if (this.apartment.yard == null)
      this.apartment.yard = false;
    this.apartment.jacuzzi = this.apartmentForm.value.jacuzzi;
    if (this.apartment.jacuzzi == null)
      this.apartment.jacuzzi = false;
    this.apartment.pool = this.apartmentForm.value.pool;
    if (this.apartment.pool == null)
      this.apartment.pool == false;
    this.apartment.aSynagogueNearby = this.apartmentForm.value.aSynagogueNearby;
    if (this.apartment.aSynagogueNearby == null)
      this.apartment.aSynagogueNearby = false;
    this.apartment.eruvAnTheNeighborhood = this.apartmentForm.value.eruvAnTheNeighborhood;
    if (this.apartment.eruvAnTheNeighborhood == null)
      this.apartment.eruvAnTheNeighborhood = false;
    this.apartment.pricePerNight = this.apartmentForm.value.price.pricePerNight;
    this.apartment.weekendPrice = this.apartmentForm.value.price.weekendPrice;
    this.apartment.priceForSaturdayNight = this.apartmentForm.value.price.priceForSaturdayNight;
    this.apartment.moreDetails = this.apartmentForm.value.moreDetails;
    const p = this.apartment.picture.split("\\")[2];
    this.apartment.picture = "../../../assets/images/" + p;
    this.homeownerService.InsertHomeowner(this.homeowner).subscribe(
      restartHomeowner => {
        this.homeownerService.registredHomeowner = restartHomeowner;
        this.insertApartment();
      },
      er => { alert(er.massege + "תקלה בהוספת המשכיר"); }
    );
  }
  insert() {
    this.homeownerService.CheckThatTheEmailIsAvailable(this.homeownerForm.value.contactInformation.email).
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
}


