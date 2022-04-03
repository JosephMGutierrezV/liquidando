import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PChartLineComponent } from './p-chart-line.component';

describe('PChartLineComponent', () => {
  let component: PChartLineComponent;
  let fixture: ComponentFixture<PChartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PChartLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
