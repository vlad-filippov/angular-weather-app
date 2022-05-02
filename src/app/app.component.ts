import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';
import { NotificationService } from './shared/services/notification.service';
import { CommonAnimations } from './shared/animations/common.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [CommonAnimations.fade, CommonAnimations.fromTop],
  styles: ['app-notification { position: fixed; z-index: 100000; top: 20px; width: 100% }'],
})
export class AppComponent {
  constructor(
    public readonly loaderService: LoaderService,
    public readonly notificationService: NotificationService,
  ) {
  }
}
