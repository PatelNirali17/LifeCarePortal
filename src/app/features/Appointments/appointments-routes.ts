import { Routes } from "@angular/router";
import { ViewAppointmentComponent } from "./view-appointment/page/view-appointment/view-appointment.component";
import { AppointmentCalendarComponent } from "./appointment-calendar/page/appointment-calendar/appointment-calendar.component";
import { AppointmentListComponent } from "./appointment-list/page/appointment-list/appointment-list.component";
import { BookAppointmentsComponent } from "./book-appointments/page/book-appointments/book-appointments.component";



export const AppointmentsRoutesList: Routes = [
    { path: 'viewappointment', component: ViewAppointmentComponent, data: { breadcrumb: 'View Appointment' } },
    { path: 'appointmentcalendar', component: AppointmentCalendarComponent, data: { breadcrumb: 'Appointment Calendar' } },
    { path: 'appointmentlist', component: AppointmentListComponent, data: { breadcrumb: 'Appointment List' } },
    { path: 'bookappointments', component: BookAppointmentsComponent, data: { breadcrumb: 'Book Appointments' } },
]