import { Routes } from "@angular/router";
import { AttendanceSheetComponent } from "./attendance-sheet/page/attendance-sheet/attendance-sheet.component";


export const HumanResourcesRoutesList: Routes = [
    // { path: 'leaverequest', component: DepartmentListComponent, data: { breadcrumb: 'Leave Requests' } },
    // { path: 'leavebalance', component: DepartmentOverviewComponent, data: { breadcrumb: 'Leave Balance' } },
    // { path: 'leavetypes', component: DesignationListComponent, data: { breadcrumb: 'Leave Types' } },
    // { path: 'holidays', component: DesignationListComponent, data: { breadcrumb: 'Holidays' } },
    // { path: 'todaysattendance', component: DesignationListComponent, data: { breadcrumb: "Today's Attendance" } },
    // { path: 'employeeattendance', component: DesignationListComponent, data: { breadcrumb: 'Employee Attendance' } },
    { path: 'attendancesheet', component: AttendanceSheetComponent, data: { breadcrumb: 'Attendance Sheet' } },
    // { path: 'employeesalary', component: DesignationListComponent, data: { breadcrumb: 'Employee Salary' } },
    // { path: 'payslip', component: DesignationListComponent, data: { breadcrumb: 'Payslip' } },
]