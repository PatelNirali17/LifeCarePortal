import { Routes } from "@angular/router";
import { ViewAppointmentComponent } from "./view-appointment/page/view-appointment/view-appointment.component";
import { AppointmentCalendarComponent } from "./appointment-calendar/page/appointment-calendar/appointment-calendar.component";



export const AppointmentsRoutesList: Routes = [
    { path: 'viewappointment', component: ViewAppointmentComponent, data: { breadcrumb: 'View Appointment' } },
    { path: 'appointmentcalendar', component: AppointmentCalendarComponent, data: { breadcrumb: 'Appointment Calendar' } },
]