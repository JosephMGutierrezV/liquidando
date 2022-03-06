import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGridComponent } from './p-grid.component';

describe('PGridComponent', () => {
  let component: PGridComponent;
  let fixture: ComponentFixture<PGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
