import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private toggleLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public setLoaderState(toggle: boolean): void {
    this.toggleLoader$.next(toggle);
  }

  public getLoaderState(): Observable<any> {
    return this.toggleLoader$.asObservable();
  }
}
