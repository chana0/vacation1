import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/classes/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';
@Component({
  selector: 'app-serch-details',
  templateUrl: './serch-details.component.html',
  styleUrls: ['./serch-details.component.css']
})
export class SerchDetailsComponent implements OnInit {
  constructor(public apartmentService: ApartmentService, private router: Router) {
    this.serchDetailsPlay()
  }
  ngOnInit(): void {
  }
  serchDetails: FormGroup;
  complete() {
    this.apartmentService.GetApartmentsByCriteria(
      this.serchDetails.value.city,
      this.serchDetails.value.neighborhood,
      this.serchDetails.value.minimumBeds,
      this.serchDetails.value.minimumRooms,
      this.serchDetails.value.yard,
      this.serchDetails.value.jacuzzi,
      this.serchDetails.value.pool,
      this.serchDetails.value.aSynagogueNearby,
      this.serchDetails.value.eruvAnTheNeighborhood,
      this.serchDetails.value.maximumPrice
    ).subscribe(
      result => {
        this.apartmentService.currentApartments = result;
        this.router.navigate(["/searchPage"]);
      },
      er => { alert(er.massege); }
    );
  }
  serchDetailsPlay() {
    this.serchDetails = new FormGroup({
      city: new FormControl(),
      neighborhood: new FormControl(),
      minimumBeds: new FormControl(),
      minimumRooms: new FormControl(),
      yard: new FormControl(),
      jacuzzi: new FormControl(),
      pool: new FormControl(),
      aSynagogueNearby: new FormControl(),
      eruvAnTheNeighborhood: new FormControl(),
      maximumPrice: new FormControl()
    });
  }
}
