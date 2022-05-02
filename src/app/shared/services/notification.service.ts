import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notification } from '../components/notification/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notification$: BehaviorSubject<Notification> = new BehaviorSubject<Notification>(null);

  public success(message: string = 'Success'): void {
    this.notification$.next(
      {
        notification: message,
        type: 'success',
      },
    );

    this.hideNotification();
  }

  public error(message: string = 'Error'): void {
    this.notification$.next(
      {
        notification: message,
        type: 'error',
      },
    );

    this.hideNotification();
  }

  public getNotification(): Observable<any> {
    return this.notification$.asObservable();
  }

  private hideNotification(): void {
    setTimeout(() => this.notification$.next(null), 3000);
  }
}
