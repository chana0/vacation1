import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/classes/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogInterestInTheApartmentComponent } from '../dialog-interest-in-the-apartment/dialog-interest-in-the-apartment.component';
import { HomeownerService } from 'src/app/services/homeowner.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  constructor(public apartmentService: ApartmentService, public dialog: MatDialog,
    public homeownerService: HomeownerService) {
    this.apartments = apartmentService.currentApartments;
    if (this.apartments.length == 0)
      this.yieldedResults = false;
  }
  ngOnInit(): void {
  }
  apartments: Array<Apartment>;
  yieldedResults: boolean = true;
  homeownerId: Array<number> = new Array<number>();
  s: string = "../../../assets/images/p2.jpg";
  interestInTheApartment(apartment: Apartment) {
    this.apartmentService.apartmentInterestedIn = apartment;
    this.homeownerId[0] = this.apartmentService.apartmentInterestedIn.homeownerId;
    this.homeownerService.GetHomeownersByHomeownersId(this.homeownerId).subscribe(
      homeowner => {
        this.apartmentService.homeownerOfApartmentInterestedIn = homeowner[0];
        this.dialog.open(DialogInterestInTheApartmentComponent);
      },
      er => { alert(er.massege + "תקלה"); }
    )
  }
}
