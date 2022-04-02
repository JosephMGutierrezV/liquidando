import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsLiquideComponent } from './steps-liquide.component';

describe('StepsLiquideComponent', () => {
  let component: StepsLiquideComponent;
  let fixture: ComponentFixture<StepsLiquideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsLiquideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsLiquideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
