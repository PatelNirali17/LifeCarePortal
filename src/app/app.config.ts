import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';
import { LoaderInterceptor } from './core/interceptor/loader.interceptor';
export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY', // Input parsing format
  },
  display: {
    dateInput: 'DD/MM/YYYY', // What shows in the input field
    monthYearLabel: 'MMM YYYY', // Month-Year format in calendar header
    dateA11yLabel: 'DD/MM/YYYY', // Accessibility label
    monthYearA11yLabel: 'MMMM YYYY', // Accessibility Month-Year
  },
};
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#6A0572',
  pbColor: '#6A0572',
  fgsType: "three-strings",
  hasProgressBar: true,
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
  provideHttpClient(withFetch(),withInterceptors([LoaderInterceptor])), provideAnimations(),
  provideToastr({
    timeOut: 10000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  }),
  importProvidersFrom(NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)),
  { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
};
