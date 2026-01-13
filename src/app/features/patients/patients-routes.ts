import { Routes } from "@angular/router";
import { AllPatientsComponent } from "./all-patients/page/all-patients/all-patients.component";
import { PatientsRecordsComponent } from "./patients-records/page/patients-records/patients-records.component";


export const PatientsRoutesList: Routes = [
    { path: 'allpatients', component: AllPatientsComponent, data: { breadcrumb: 'All Patients' } },
    { path: 'patientsrecords', component: PatientsRecordsComponent, data: { breadcrumb: 'Patients Records' } },
]