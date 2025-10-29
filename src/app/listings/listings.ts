import { Component } from '@angular/core';
import { TransporterTrip } from '../model/TransporterTrip.model';
import { TRANSPORTER_TRIPS } from '../mocks/transproterTrip.mock';

@Component({
  selector: 'app-listings',
  imports: [],
  templateUrl: './listings.html',
  styleUrl: './listings.css',
})
export class Listings {

  listings!: TransporterTrip[];

  constructor(){
    this.listings = TRANSPORTER_TRIPS;
  }

}
