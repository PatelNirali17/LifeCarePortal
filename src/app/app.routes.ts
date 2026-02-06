import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { DashboardComponent } from './features/dashboard/page/dashboard/dashboard.component';
import { AppointmentsRoutesList } from './features/Appointments/appointments-routes';
import { DoctorsRoutesList } from './features/doctors/doctors-routes';
import { StaffRoutesList } from './features/staff/staff-routes';
import { RoleManagementRoutesList } from './features/role-management/role-management-routes';
import { PatientsRoutesList } from './features/patients/patients-routes';
import { RoomAllotmentRoutesList } from './features/room-allotment/room-allotment-routes';
import { RecordsRoutesList } from './features/records/records-routes';
import { AmbulanceRoutesList } from './features/ambulance/ambulance-list-routes';
import { PharmacyRoutesList } from './features/pharmacy/pharmacy-routes';
import { BloodBankRoutesList } from './features/blood-bank/blood-bank-routes';
import { AccountsRoutesList } from './features/accounts/accounts-routes';
import { LaboratoryRoutesList } from './features/laboratory/laboratory-routes';
import { EMR_EHRRoutesList } from './features/emr_ehr/emr-ehr-routes';
import { OperationTheatreRoutesList } from './features/operation-theatre/operation-theatre-routes';
import { RadiologyRoutesList } from './features/radiology/radiology-routes';
import { InsuranceRoutesList } from './features/insurance/insurance-routes';
import { DepartmentsRoutesList } from './features/departments/departments-routes';
import { InventoryRoutesList } from './features/inventory/inventory-routes';
import { HumanResourcesRoutesList } from './features/human-resources/human-resources-routes';
import { PatientDashboardComponent } from './features/patient-dashboard/page/patient-dashboard/patient-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: '', component: MainPageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
      { path: 'doctordashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
      { path: 'patientdashboard', component: PatientDashboardComponent, data: { breadcrumb: 'Dashboard' } },
      {
        path: 'appointments', data: { breadcrumb: 'Appointments' },
        children: AppointmentsRoutesList
      },
      {
        path: 'doctors', data: { breadcrumb: 'Doctors' },
        children: DoctorsRoutesList
      },
      {
        path: 'staff', data: { breadcrumb: 'Staff' },
        children: StaffRoutesList
      },
      {
        path: 'rolemanagement', data: { breadcrumb: 'Role Management' },
        children: RoleManagementRoutesList
      },
      {
        path: 'patients', data: { breadcrumb: 'Patients' },
        children: PatientsRoutesList
      },
      {
        path: 'roomallotment', data: { breadcrumb: 'Room Allotment' },
        children: RoomAllotmentRoutesList
      },
      {
        path: 'records', data: { breadcrumb: 'Records' },
        children: RecordsRoutesList
      },
      {
        path: 'ambulance', data: { breadcrumb: 'Ambulance' },
        children: AmbulanceRoutesList
      },
      {
        path: 'pharmacy', data: { breadcrumb: 'Pharmacy' },
        children: PharmacyRoutesList
      },
      {
        path: 'bloodbank', data: { breadcrumb: 'Blood Bank' },
        children: BloodBankRoutesList
      },
      {
        path: 'accounts', data: { breadcrumb: 'Accounts' },
        children: AccountsRoutesList
      },
      {
        path: 'laboratory', data: { breadcrumb: 'Laboratory' },
        children: LaboratoryRoutesList
      },
      {
        path: 'emr_ehr', data: { breadcrumb: 'EMR/EHR' },
        children: EMR_EHRRoutesList
      },
      {
        path: 'operationtheatre', data: { breadcrumb: 'Operation Theatre' },
        children: OperationTheatreRoutesList
      },
      {
        path: 'radiology', data: { breadcrumb: 'Radiology' },
        children: RadiologyRoutesList
      },
      {
        path: 'insurance', data: { breadcrumb: 'Insurance' },
        children: InsuranceRoutesList
      },
      {
        path: 'departments', data: { breadcrumb: 'Departments' },
        children: DepartmentsRoutesList
      },
      {
        path: 'inventory', data: { breadcrumb: 'Inventory' },
        children: InventoryRoutesList
      },
      {
        path: 'humanresources', data: { breadcrumb: 'Human Resources' },
        children: HumanResourcesRoutesList
      },
    ]
  }
];
