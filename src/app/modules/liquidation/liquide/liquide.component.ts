import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { debounceTime, fromEvent, Observable, pluck } from 'rxjs';

@Component({
  selector: 'app-liquide',
  templateUrl: './liquide.component.html',
  styleUrls: ['./liquide.component.scss'],
})
export class LiquideComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('inputSettled') inputSettled!: ElementRef;

  public showInputOtherRate = false;

  public isHaveNumberSettled = true;

  public keyUpSettled$!: Observable<any>;

  public subscriptions: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.keyUpSettled$ = fromEvent(
      this.inputSettled.nativeElement,
      'keyup'
    ).pipe(debounceTime(500), pluck('target', 'value'));
    this.subscriptions.push(
      this.keyUpSettled$.subscribe((value: any) => {
        if (value === '') {
          this.isHaveNumberSettled = true;
        } else {
          this.isHaveNumberSettled = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: any) =>
      subscription.unsubscribe()
    );
  }

  onItemChange(event: any) {
    if (event.target.value === 'option4') {
      this.showInputOtherRate = true;
    } else {
      this.showInputOtherRate = false;
    }
  }
  onChangeSettled(event: any) {
    if (event.target.value === '') {
      this.isHaveNumberSettled = true;
    } else {
      this.isHaveNumberSettled = false;
    }
  }
}
