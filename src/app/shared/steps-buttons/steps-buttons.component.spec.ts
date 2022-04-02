import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsButtonsComponent } from './steps-buttons.component';

describe('StepsButtonsComponent', () => {
  let component: StepsButtonsComponent;
  let fixture: ComponentFixture<StepsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
