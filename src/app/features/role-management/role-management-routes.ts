import { Routes } from "@angular/router";
import { CreateRoleComponent } from "./create-role/page/create-role/create-role.component";
import { RoleAssignComponent } from "./role-assign/page/role-assign/role-assign.component";

export const RoleManagementRoutesList: Routes = [
    { path: 'createrole', component: CreateRoleComponent, data: { breadcrumb: 'Create Role' } },
    { path: 'roleassign', component: RoleAssignComponent, data: { breadcrumb: 'Role Assign' } },
]