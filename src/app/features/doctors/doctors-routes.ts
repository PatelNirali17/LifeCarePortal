import { Routes } from "@angular/router";
import { AllDoctorsComponent } from "./all-doctors/page/all-doctors/all-doctors.component";
import { AssignDepartmentComponent } from "./assign-department/page/assign-department/assign-department.component";
import { ShiftManagementComponent } from "./shift-management/page/shift-management/shift-management.component";
import { DoctorDetailsComponent } from "./doctor-details/page/doctor-details/doctor-details.component";



export const DoctorsRoutesList: Routes = [
    { path: 'alldoctors', component: AllDoctorsComponent, data: { breadcrumb: 'All Doctors' } },
    { path: 'assigndoctor', component: AssignDepartmentComponent, data: { breadcrumb: 'Assign Department' } },
    { path: 'shiftmanagement', component: ShiftManagementComponent, data: { breadcrumb: 'Shift Management' } },
    { path: 'doctordetails', component: DoctorDetailsComponent, data: { breadcrumb: 'Doctor Details' } },
]