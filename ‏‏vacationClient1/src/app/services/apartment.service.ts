import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../classes/apartment';
import { Homeowner } from '../classes/homeowner';
@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  constructor(public http: HttpClient) { }
  url = "https://localhost:44339/api/Apartment/";
  currentApartments: Array<Apartment>;
  apartmentInterestedIn: Apartment;
  homeownerOfApartmentInterestedIn: Homeowner;
  InsertApartment(apartment: Apartment): Observable<Apartment> {
    return this.http.post<Apartment>(this.url + "InsertApartment", apartment)
  }
  GetApartmentsByCriteria(
    city: string, neighborhood: string, minimumBeds: number, minimumRooms: number,
    yard: boolean, jacuzzi: boolean, pool: boolean, aSynagogueNearby: boolean,
    eruvAnTheNeighborhood: boolean, maximumPrice: number
  ): Observable<Array<Apartment>> {
    return this.http.post<Array<Apartment>>(this.url + "GetApartmentsByCriteria",
      {
        "city": city, "neighborhood": neighborhood, "minimumBeds": minimumBeds, "minimumRooms": minimumRooms,
        "yard": yard, "jacuzzi": jacuzzi, "pool": pool, "aSynagogueNearby": aSynagogueNearby,
        "eruvAnTheNeighborhood": eruvAnTheNeighborhood, "maximumPrice": maximumPrice
      }
    );
  }
  GetApartmentsByApartmentsId(apartmentsId: Array<number>): Observable<Array<Apartment>> {
    return this.http.post<Array<Apartment>>(this.url + "GetApartmentsByApartmentsId", apartmentsId);
  }
}