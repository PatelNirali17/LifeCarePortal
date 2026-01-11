import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { finalize } from 'rxjs/operators';

export const LoaderInterceptor: HttpInterceptorFn = (req, next) => {
  const uiLoaderService = inject(NgxUiLoaderService);
  
  uiLoaderService.start(); // Start loader before request

  return next(req).pipe(
    finalize(() => {
      // This runs for both success & error cases
      uiLoaderService.stop();
    })
  );
};
