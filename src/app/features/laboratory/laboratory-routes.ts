import { Routes } from "@angular/router";
import { TestCatalogComponent } from "./test-catalog/page/test-catalog/test-catalog.component";
import { TestRequestsComponent } from "./test-requests/page/test-requests/test-requests.component";
import { SampleCollectionComponent } from "./sample-collection/page/sample-collection/sample-collection.component";
import { TechnicianAssignmentComponent } from "./technician-assignment/page/technician-assignment/technician-assignment.component";
import { LabReportsComponent } from "./lab-reports/page/lab-reports/lab-reports.component";

export const LaboratoryRoutesList: Routes = [
    { path: 'testcatalog', component: TestCatalogComponent, data: { breadcrumb: 'Test Catalog' } },
    { path: 'testrequests', component: TestRequestsComponent, data: { breadcrumb: 'Test Requests' } },
    { path: 'samplecollection', component: SampleCollectionComponent, data: { breadcrumb: 'Sample Collection' } },
    { path: 'technicianassignment', component: TechnicianAssignmentComponent, data: { breadcrumb: 'Technician Assignment' } },
    { path: 'labreports', component: LabReportsComponent, data: { breadcrumb: 'Lab Reports' } },
]