import { Injectable } from '@angular/core';
import { TransporterTrip } from '../model/TransporterTrip.model';
import { TRANSPORTER_TRIPS } from '../mocks/transproterTrip.mock';

@Injectable({
  providedIn: 'root'
})
export class transporterService {

  transporterTrip!: TransporterTrip[];

  listings!: TransporterTrip[];

  constructor(){
    this.listings = TRANSPORTER_TRIPS;
  }

  transporterTripList(): TransporterTrip []{
    return this.listings;
  }
  
  addTransporterTrip(transporterTrip: TransporterTrip){
    this.listings.push(transporterTrip);
  }
}
