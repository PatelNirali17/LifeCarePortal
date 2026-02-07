import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatCalendar, MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-doctor-details-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './doctor-details-dashboard.component.html',
  styleUrl: './doctor-details-dashboard.component.scss'
})
export class DoctorDetailsDashboardComponent {
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
  tooltipText: string | null = null;
  tooltipPosition = { x: 0, y: 0 };

  events: { date: Date; title: string }[] = [
    { date: new Date(2026, 1, 6), title: '2 Followup Appointment' },
    { date: new Date(2026, 1, 7), title: '1 Surgery, 1 Consultation' },
    { date: new Date(2026, 1, 8), title: '1 Polyclinic Visit, 1 Followup Appointment' },
    { date: new Date(2026, 1, 10), title: '1 Surgery, 1 Followup Appointment' },
    { date: new Date(2026, 1, 11), title: '1 Followup Appointment' },
    { date: new Date(2026, 1, 17), title: '1 Followup Appointment' },
    { date: new Date(2026, 1, 20), title: '1 Surgery' },
    { date: new Date(2026, 1, 21), title: '1 Followup Appointment, 1 Ward Round' },
    { date: new Date(2026, 1, 23), title: '2 Surgery' },
    { date: new Date(2026, 1, 28), title: '1 Polyclinic Visit' }
  ];

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highlight dates in the month view.
    if (view === 'month') {
      const event = this.events.find(e =>
        e.date.getDate() === cellDate.getDate() &&
        e.date.getMonth() === cellDate.getMonth() &&
        e.date.getFullYear() === cellDate.getFullYear()
      );

      if (event) {
        const types = this.getEventTypes(event.title);

        if (types.length > 0) {
          return `event-indicator combo-${types.join('-')}`;
        }
        return 'event-indicator'; // Fallback
      }
    }

    return '';
  };

  getEventTypes(title: string): string[] {
    const types: string[] = [];
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('consultation')) types.push('consultation');
    if (lowerTitle.includes('followup')) types.push('followup');
    if (lowerTitle.includes('polyclinic')) types.push('polyclinic');
    if (lowerTitle.includes('surgery')) types.push('surgery');
    if (lowerTitle.includes('ward round')) types.push('wardround');
    return types.sort();
  }

  getTooltipForType(fullTitle: string, type: string): string {
    const parts = fullTitle.split(',');
    let searchKey = type;
    if (type === 'wardround') searchKey = 'ward round';

    const match = parts.find(p => p.toLowerCase().includes(searchKey));
    return match ? match.trim() : type;
  }

  onCalendarMouseMove(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Check if hovering over a cell that has an event indicator
    const cell = target.closest('.event-indicator');

    if (cell) {
      const dayText = cell.textContent?.trim();
      // Ensure we have the calendar active date to determine the month/year
      if (dayText && this.calendar && this.calendar.activeDate) {
        const day = parseInt(dayText, 10);
        const currentMonth = this.calendar.activeDate.getMonth();
        const currentYear = this.calendar.activeDate.getFullYear();

        const eventItem = this.events.find(e =>
          e.date.getDate() === day &&
          e.date.getMonth() === currentMonth &&
          e.date.getFullYear() === currentYear
        );

        if (eventItem) {
          const types = this.getEventTypes(eventItem.title);
          const numDots = types.length;

          if (numDots > 0) {
            const dotSize = 6;
            const gap = 2;
            const totalWidth = (dotSize * numDots) + (gap * (numDots - 1));

            const rect = cell.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            const distFromBottom = rect.height - mouseY;

            // Check if hovering over the dots area (bottom 15px)
            if (distFromBottom >= 0 && distFromBottom <= 15) {
              const centerX = rect.width / 2;
              const startX = centerX - (totalWidth / 2);

              if (mouseX >= startX && mouseX <= startX + totalWidth) {
                const relativeX = mouseX - startX;
                const stride = dotSize + gap;
                const index = Math.floor(relativeX / stride);
                const offset = relativeX % stride;

                if (index >= 0 && index < numDots && offset <= dotSize) {
                  this.tooltipText = this.getTooltipForType(eventItem.title, types[index]);
                  this.tooltipPosition = { x: event.clientX - 15, y: event.clientY + 15 };
                  return;
                }
              }
            }
          }
        }
      }
    }
    this.tooltipText = null;
  }
}
