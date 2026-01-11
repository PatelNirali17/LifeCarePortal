import { Routes } from "@angular/router";
import { ViewAppointmentComponent } from "./view-appointment/page/view-appointment/view-appointment.component";



export const AppointmentsRoutesList: Routes = [
    { path: 'viewappointment', component: ViewAppointmentComponent, data: { breadcrumb: 'View Appointment' } },
]