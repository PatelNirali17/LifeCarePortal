import { Routes } from "@angular/router";
import { AmbulanceListComponent } from "./ambulance-list/page/ambulance-list/ambulance-list.component";


export const AmbulanceRoutesList: Routes = [
    { path: 'ambulancelist', component: AmbulanceListComponent, data: { breadcrumb: 'Ambulance List' } },
]