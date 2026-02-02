import { Routes } from "@angular/router";
import { DepartmentListComponent } from "./department-list/page/department-list/department-list.component";
import { DepartmentOverviewComponent } from "./department-overview/page/department-overview/department-overview.component";
import { DesignationListComponent } from "./designation-list/page/designation-list/designation-list.component";

export const DepartmentsRoutesList: Routes = [
    { path: 'departmentlist', component: DepartmentListComponent, data: { breadcrumb: 'Department List' } },
    { path: 'departmentoverview', component: DepartmentOverviewComponent, data: { breadcrumb: 'Department Overview' } },
    { path: 'designationlist', component: DesignationListComponent, data: { breadcrumb: 'Designation List' } },
]