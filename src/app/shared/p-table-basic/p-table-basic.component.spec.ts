import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTableBasicComponent } from './p-table-basic.component';

describe('PTableBasicComponent', () => {
  let component: PTableBasicComponent;
  let fixture: ComponentFixture<PTableBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTableBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
