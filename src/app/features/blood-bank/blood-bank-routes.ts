import { Routes } from "@angular/router";
import { BloodStockComponent } from "./blood-stock/page/blood-stock/blood-stock.component";

export const BloodBankRoutesList: Routes = [
    { path: 'bloodstock', component: BloodStockComponent, data: { breadcrumb: 'Blood Stock' } },
]