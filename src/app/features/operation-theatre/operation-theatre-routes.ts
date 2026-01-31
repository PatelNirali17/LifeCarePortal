import { Routes } from "@angular/router";
import { OtSchedulingComponent } from "./ot-scheduling/page/ot-scheduling/ot-scheduling.component";
import { PreOpAssessmentComponent } from "./pre-op-assessment/page/pre-op-assessment/pre-op-assessment.component";
import { PostOpNotesComponent } from "./post-op-notes/page/post-op-notes/post-op-notes.component";
import { SurgeryRecordsComponent } from "./surgery-records/page/surgery-records/surgery-records.component";
import { OtInventoryComponent } from "./ot-inventory/page/ot-inventory/ot-inventory.component";


export const OperationTheatreRoutesList: Routes = [
    { path: 'otscheduling', component: OtSchedulingComponent, data: { breadcrumb: 'OT Scheduling' } },
    { path: 'preopassessment', component: PreOpAssessmentComponent, data: { breadcrumb: 'Pre-Op Assessment' } },
    { path: 'postopnotes', component: PostOpNotesComponent, data: { breadcrumb: 'Post-Op Notes' } },
    { path: 'surgeryrecords', component: SurgeryRecordsComponent, data: { breadcrumb: 'Surgery Records' } },
    { path: 'otinventory', component: OtInventoryComponent, data: { breadcrumb: 'OT Inventory' } },
]