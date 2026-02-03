import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-payslip',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './payslip.component.html',
  styleUrl: './payslip.component.scss'
})
export class PayslipComponent {
  payslip = {
    companyLogo: 'Cliniva Hospital',
    title: 'Payslip',
    period: 'For the month of June 2022',
    payslipNo: '859654',
    paymentDate: 'Jul 02, 2022',
    companyDetails: {
      name: 'EInfosoft Technology',
      addressLine1: '52, Titanium software hub',
      addressLine2: 'Gift city, Gandinagar',
      country: 'India',
      email: 'hr@einfosoft.com'
    },
    employeeDetails: {
      name: 'Sarah Smith',
      id: 'EMP-0025',
      addressLine1: 'A 507 Parimal Hights',
      addressLine2: 'Near Shyamal Cross, Ahmedabad',
      country: 'India',
      email: 'sarah@einfosoft.com'
    },
    earnings: [
      { description: 'Basic Salary', amount: 8568.00 },
      { description: 'House Rent Allowance', amount: 125.00 },
      { description: 'Dearness Allowance', amount: 87.00 },
      { description: 'Special Allowance', amount: 50.00 },
      { description: 'Performance Bonus', amount: 75.00 }
    ],
    deductions: [
      { description: 'Provident Fund', amount: 10.00 },
      { description: 'Professional Tax', amount: 20.00 },
      { description: 'ESI', amount: 0.00 },
      { description: 'Home Loan', amount: 210.00 },
      { description: 'TDS', amount: 113.00 }
    ],
    totalEarnings: 8905.00,
    totalDeductions: 353.00,
    netPay: 8552.00,
    netPayInWords: 'Eight Thousand Five Hundred Fifty Two Rupees Only',
    signatory: {
      name: 'Priya Jain',
      role: 'HR Manager'
    },
    footerNote: 'This is a computer-generated document. No signature is required.',
    contactNote: 'For any queries regarding this payslip, please contact HR department.'
  };
}
