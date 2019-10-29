import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private counterBehaviorSubject$: BehaviorSubject<number>;
  public counter$: Observable<number>;

  constructor() {
    this.counterBehaviorSubject$ = new BehaviorSubject<number>(0);
    this.counter$ = this.counterBehaviorSubject$.asObservable();
  }

  public increaseCounter(): void {
    let count = this.counterBehaviorSubject$.getValue();
    ++count;
    this.emitCounterValue(count);
  }

  public decreaseCounter(): void {
    let count = this.counterBehaviorSubject$.getValue();
    --count;
    this.emitCounterValue(count);
  }

  private emitCounterValue(count: number): void {
    this.counterBehaviorSubject$.next(count);
  }
}
