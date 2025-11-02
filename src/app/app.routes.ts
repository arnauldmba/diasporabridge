import { Routes } from '@angular/router';
import { Listings } from './listings/listings';
import { AddListings } from './add-listings/add-listings';

export const routes: Routes = [
    { path: "listings", component : Listings },
    { path: "add-listing", component : AddListings },
    { path: "", redirectTo: "listings", pathMatch: "full" }
];
