import { Routes } from "@angular/router";
import { AttendanceSheetComponent } from "./attendance-sheet/page/attendance-sheet/attendance-sheet.component";
import { PayslipComponent } from "./payslip/page/payslip/payslip.component";
import { EmployeeAttendanceComponent } from "./employee-attendance/page/employee-attendance/employee-attendance.component";
import { EmployeeSalaryComponent } from "./employee-salary/page/employee-salary/employee-salary.component";
import { TodaysAttendanceComponent } from "./todays-attendance/page/todays-attendance/todays-attendance.component";
import { HolidaysComponent } from "./holidays/page/holidays/holidays.component";


export const HumanResourcesRoutesList: Routes = [
    // { path: 'leaverequest', component: DepartmentListComponent, data: { breadcrumb: 'Leave Requests' } },
    // { path: 'leavebalance', component: DepartmentOverviewComponent, data: { breadcrumb: 'Leave Balance' } },
    // { path: 'leavetypes', component: DesignationListComponent, data: { breadcrumb: 'Leave Types' } },
    { path: 'holidays', component: HolidaysComponent, data: { breadcrumb: 'Holidays' } },
    { path: 'todaysattendance', component: TodaysAttendanceComponent, data: { breadcrumb: "Today's Attendance" } },
    { path: 'employeeattendance', component: EmployeeAttendanceComponent, data: { breadcrumb: 'Employee Attendance' } },
    { path: 'attendancesheet', component: AttendanceSheetComponent, data: { breadcrumb: 'Attendance Sheet' } },
    { path: 'employeesalary', component: EmployeeSalaryComponent, data: { breadcrumb: 'Employee Salary' } },
    { path: 'payslip', component: PayslipComponent, data: { breadcrumb: 'Payslip' } },
]