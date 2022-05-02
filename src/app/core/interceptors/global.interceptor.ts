import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../../shared/services/loader.service';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router,
    private readonly loaderService: LoaderService,
    private readonly notificationService: NotificationService,
  ) {
  }

  public intercept(request, next): Observable<HttpEvent<any>> {
    this.loaderService.setLoaderState(true);

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.loaderService.setLoaderState(false);
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.notificationService.error(err.error.error.message);
        this.loaderService.setLoaderState(false);
      }
    }));
  }
}
