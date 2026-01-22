import { Routes } from "@angular/router";
import { BloodStockComponent } from "./blood-stock/page/blood-stock/blood-stock.component";
import { BloodDonorComponent } from "./blood-donor/page/blood-donor/blood-donor.component";
import { BloodIssuedComponent } from "./blood-issued/page/blood-issued/blood-issued.component";

export const BloodBankRoutesList: Routes = [
    { path: 'bloodstock', component: BloodStockComponent, data: { breadcrumb: 'Blood Stock' } },
    { path: 'blooddonor', component: BloodDonorComponent, data: { breadcrumb: 'Blood Donor' } },
    { path: 'bloodissued', component: BloodIssuedComponent, data: { breadcrumb: 'Blood Issued' } },
]