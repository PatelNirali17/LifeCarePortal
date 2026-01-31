import { Routes } from "@angular/router";
import { TestOrderingComponent } from "./test-ordering/page/test-ordering/test-ordering.component";
import { ScansTrackingComponent } from "./scans-tracking/page/scans-tracking/scans-tracking.component";
import { ImagingReportsComponent } from "./imaging-reports/page/imaging-reports/imaging-reports.component";

export const RadiologyRoutesList: Routes = [
    { path: 'testordering', component: TestOrderingComponent, data: { breadcrumb: 'Test Ordering' } },
    { path: 'scanstracking', component: ScansTrackingComponent, data: { breadcrumb: 'Scans Tracking' } },
    { path: 'imagingreports', component: ImagingReportsComponent, data: { breadcrumb: 'Imaging Reports' } },
]