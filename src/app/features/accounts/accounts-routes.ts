import { Routes } from "@angular/router";
import { BillListComponent } from "./bill-list/page/bill-list/bill-list.component";
import { IncomeComponent } from "./income/page/income/income.component";
import { ExpensesComponent } from "./expenses/page/expenses/expenses.component";

export const AccountsRoutesList: Routes = [
    { path: 'billlist', component: BillListComponent, data: { breadcrumb: 'Bill List' } },
    { path: 'income', component: IncomeComponent, data: { breadcrumb: 'Income' } },
    { path: 'expenses', component: ExpensesComponent, data: { breadcrumb: 'Expenses' } },
    // { path: 'incomereport', component: AmbulanceCallListComponent, data: { breadcrumb: 'Income Report' } },
    // { path: 'invoice', component: AmbulanceCallListComponent, data: { breadcrumb: 'Invoice' } },
]