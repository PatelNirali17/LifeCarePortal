import { Routes } from "@angular/router";
import { MedicineListComponent } from "./medicine-list/page/medicine-list/medicine-list.component";


export const PharmacyRoutesList: Routes = [
    { path: 'medicinelist', component: MedicineListComponent, data: { breadcrumb: 'Medicine List' } },
]