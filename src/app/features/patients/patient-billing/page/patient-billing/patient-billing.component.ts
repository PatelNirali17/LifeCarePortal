import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-billing',
  imports: [SharedModule, CommonModule],
  templateUrl: './patient-billing.component.html',
  styleUrl: './patient-billing.component.scss'
})
export class PatientBillingComponent {
  billingList: any = [
    {
      "invoiceNo": "A348",
      "doctorName": "Dr. Jacob Ryan",
      "date": "04/03/2016",
      "amount": "₹40",
      "tax": "10%",
      "discount": "₹5",
      "total": "₹39",
      "actions": null
    },
    {
      "invoiceNo": "A645",
      "doctorName": "Dr. Rajesh",
      "date": "11/04/2016",
      "amount": "₹25",
      "tax": "10%",
      "discount": "₹5",
      "total": "₹22",
      "actions": null
    },
    {
      "invoiceNo": "A873",
      "doctorName": "Dr. Jay Soni",
      "date": "18/04/2016",
      "amount": "₹50",
      "tax": "10%",
      "discount": "₹5",
      "total": "₹47",
      "actions": null
    },
    {
      "invoiceNo": "A927",
      "doctorName": "Dr. John Deo",
      "date": "22/05/2016",
      "amount": "₹45",
      "tax": "10%",
      "discount": "₹5",
      "total": "₹42",
      "actions": null
    },
    {
      "invoiceNo": "A228",
      "doctorName": "Dr. Megha Trivedi",
      "date": "09/07/2016",
      "amount": "₹62",
      "tax": "10%",
      "discount": "₹5",
      "total": "₹57",
      "actions": null
    },
    {
      "invoiceNo": "A345",
      "doctorName": "Dr. Sarah Smith",
      "date": "14/07/2016",
      "amount": "₹60",
      "tax": "10%",
      "discount": "₹5",
      "total": "₹56",
      "actions": null
    },
    {
      "invoiceNo": "A765",
      "doctorName": "Dr. Jacob Ryan",
      "date": "22/06/2016",
      "amount": "₹40",
      "tax": "10%",
      "discount": "₹5",
      "total": "₹39",
      "actions": null
    },
    {
      "invoiceNo": "A125",
      "doctorName": "Dr. Rajesh",
      "date": "23/06/2016",
      "amount": "₹30",
      "tax": "10%",
      "discount": "₹5",
      "total": "₹29",
      "actions": null
    }
  ];
}
