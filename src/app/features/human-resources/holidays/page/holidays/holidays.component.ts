import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-holidays',
  imports: [SharedModule,CommonModule],
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.scss',
})
export class HolidaysComponent implements OnInit {
holidays = [
  {
    id: 1,
    name: 'New Year',
    date: '2026-01-01',
    shift: 'All Shifts',
    location: 'All Locations',
    type: 'National',
    status: 'Approved',
    details: 'Celebration of the new year.',
  },
  {
    id: 2,
    name: 'Republic Day',
    date: '2026-01-26',
    shift: 'All Shifts',
    location: 'All Locations',
    type: 'National',
    status: 'Approved',
    details: 'Commemorates the adoption of the Constitution of India.',
  },
  {
    id: 3,
    name: 'Holi',
    date: '2026-03-04',
    shift: 'All Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Festival of colors celebrated across India.',
  },
  {
    id: 4,
    name: 'Eid-ul-Fitr',
    date: '2026-03-21',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Islamic festival marking the end of Ramadan (tentative, moon sighting).',
  },
  {
    id: 5,
    name: 'Ram Navami',
    date: '2026-03-26',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Celebrates the birth of Lord Rama.',
  },
  {
    id: 6,
    name: 'Mahavir Jayanti',
    date: '2026-03-31',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Birth anniversary of Lord Mahavir.',
  },
  {
    id: 7,
    name: 'Good Friday',
    date: '2026-04-03',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Christian observance commemorating the crucifixion of Jesus Christ.',
  },
  {
    id: 8,
    name: 'Ambedkar Jayanti',
    date: '2026-04-14',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'National',
    status: 'Approved',
    details: 'Birth anniversary of Dr. B. R. Ambedkar.',
  },
  {
    id: 9,
    name: 'Buddha Purnima',
    date: '2026-05-01',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Commemorates the birth of Gautama Buddha.',
  },
  {
    id: 10,
    name: 'Eid-ul-Adha (Bakrid)',
    date: '2026-05-27',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Islamic festival of sacrifice (tentative, moon sighting).',
  },
  {
    id: 11,
    name: 'Muharram',
    date: '2026-06-26',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Islamic New Year (tentative, moon sighting).',
  },
  {
    id: 12,
    name: 'Independence Day',
    date: '2026-08-15',
    shift: 'All Shifts',
    location: 'All Locations',
    type: 'National',
    status: 'Approved',
    details: 'Celebrates India’s independence from British rule.',
  },
  {
    id: 13,
    name: 'Janmashtami',
    date: '2026-09-04',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Celebrates the birth of Lord Krishna.',
  },
  {
    id: 14,
    name: 'Gandhi Jayanti',
    date: '2026-10-02',
    shift: 'All Shifts',
    location: 'All Locations',
    type: 'National',
    status: 'Approved',
    details: 'Birth anniversary of Mahatma Gandhi.',
  },
  {
    id: 15,
    name: 'Dussehra',
    date: '2026-10-20',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Celebrates the victory of good over evil.',
  },
  {
    id: 16,
    name: 'Diwali',
    date: '2026-11-08',
    shift: 'All Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Festival of lights celebrated by Hindus.',
  },
  {
    id: 17,
    name: 'Guru Nanak Jayanti',
    date: '2026-11-24',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Birth anniversary of Guru Nanak Dev Ji.',
  },
  {
    id: 18,
    name: 'World AIDS Day',
    date: '2026-12-01',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Awareness',
    status: 'Approved',
    details: 'Day to raise awareness about AIDS.',
  },
  {
    id: 19,
    name: 'Christmas',
    date: '2026-12-25',
    shift: 'Day Shifts',
    location: 'All Locations',
    type: 'Religious',
    status: 'Approved',
    details: 'Celebration of the birth of Jesus Christ.',
  },
];


  ngOnInit(): void {
    this.holidays.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  getHolidayIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'national':
        return 'fa fa-flag';
      case 'awareness':
        return 'fa fa-globe';
      case 'religious':
        return 'fa fa-star';
      default:
        return 'fa fa-calendar';
    }
  }
}
