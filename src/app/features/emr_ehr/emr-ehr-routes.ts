import { Routes } from "@angular/router";
import { PatientEncountersComponent } from "./patient-encounters/page/patient-encounters/patient-encounters.component";
import { ClinicalNotesComponent } from "./clinical-notes/page/clinical-notes/clinical-notes.component";
import { TreatmentPlansComponent } from "./treatment-plans/page/treatment-plans/treatment-plans.component";
import { MedicationHistoryComponent } from "./medication-history/page/medication-history/medication-history.component";
import { PatientDocumentsComponent } from "./patient-documents/page/patient-documents/patient-documents.component";


export const EMR_EHRRoutesList: Routes = [
    { path: 'patientencounters', component: PatientEncountersComponent, data: { breadcrumb: 'Patient Encounters' } },
    { path: 'clinicalnotes', component: ClinicalNotesComponent, data: { breadcrumb: 'Clinical Notes' } },
    { path: 'treatmentplans', component: TreatmentPlansComponent, data: { breadcrumb: 'Treatment Plans' } },
    { path: 'medicationhistory', component: MedicationHistoryComponent, data: { breadcrumb: 'Medication History' } },
    { path: 'patientdocuments', component: PatientDocumentsComponent, data: { breadcrumb: 'Patient Documents' } },
]