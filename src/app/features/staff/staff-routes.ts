import { Routes } from "@angular/router";
import { AllStaffComponent } from "./all-staff/page/all-staff/all-staff.component";


export const StaffRoutesList: Routes = [
    { path: 'allstaff', component: AllStaffComponent, data: { breadcrumb: 'All Staff' } },
]