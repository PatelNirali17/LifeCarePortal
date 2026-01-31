import { Routes } from "@angular/router";
import { PatientInsuranceComponent } from "./patient-insurance/page/patient-insurance/patient-insurance.component";
import { ClaimStatusComponent } from "./claim-status/page/claim-status/claim-status.component";
import { InsuranceProviderComponent } from "./insurance-provider/page/insurance-provider/insurance-provider.component";


export const InsuranceRoutesList: Routes = [
    { path: 'patientinsurance', component: PatientInsuranceComponent, data: { breadcrumb: 'Patient Insurance' } },
    { path: 'claimstatus', component: ClaimStatusComponent, data: { breadcrumb: 'Claim Status' } },
    { path: 'insuranceprovider', component: InsuranceProviderComponent, data: { breadcrumb: 'Insurance Provider' } },
]