import { animate, style, transition, trigger } from '@angular/animations';

export class CommonAnimations {
  static fade = trigger('fade', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.3s', style({ opacity: 1 })),
    ]),
    transition(':leave', [animate('.3s', style({ opacity: 0 }))]),
  ]);

  static fromTop = trigger('fromTop', [
    transition(':enter', [
      style({ top: '-100%' }),
      animate('1s', style({ top: '20px' })),
    ]),
    transition(':leave', [animate('1s', style({ top: '-100%' }))]),
  ]);
}
