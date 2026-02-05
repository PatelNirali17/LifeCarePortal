import { Routes } from "@angular/router";
import { AllPatientsComponent } from "./all-patients/page/all-patients/all-patients.component";
import { PatientsRecordsComponent } from "./patients-records/page/patients-records/patients-records.component";
import { PatientDetailsComponent } from "./patient-details/page/patient-details/patient-details.component";
import { PrescriptionsComponent } from "./prescriptions/page/prescriptions/prescriptions.component";
import { MedicalRecordComponent } from "./medical-record/page/medical-record/medical-record.component";
import { PatientBillingComponent } from "./patient-billing/page/patient-billing/patient-billing.component";


export const PatientsRoutesList: Routes = [
    { path: 'allpatients', component: AllPatientsComponent, data: { breadcrumb: 'All Patients' } },
    { path: 'patientsrecords', component: PatientsRecordsComponent, data: { breadcrumb: 'Patients Records' } },
    { path: 'patientdetails', component: PatientDetailsComponent, data: { breadcrumb: 'Patients Details' } },
    { path: 'prescriptions', component: PrescriptionsComponent, data: { breadcrumb: 'Prescriptions' } },
    { path: 'medicalrecord', component: MedicalRecordComponent, data: { breadcrumb: 'Medical Record' } },
    { path: 'billing', component: PatientBillingComponent, data: { breadcrumb: 'Billing' } },
]