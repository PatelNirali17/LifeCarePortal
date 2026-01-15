import { Routes } from "@angular/router";
import { BirthRecordsComponent } from "./birth-records/page/birth-records/birth-records.component";
import { DeathRecordsComponent } from "./death-records/page/death-records/death-records.component";


export const RecordsRoutesList: Routes = [
    { path: 'birthrecords', component: BirthRecordsComponent, data: { breadcrumb: 'Birth Records' } },
    { path: 'deathrecords', component: DeathRecordsComponent, data: { breadcrumb: 'Death Records' } },
]