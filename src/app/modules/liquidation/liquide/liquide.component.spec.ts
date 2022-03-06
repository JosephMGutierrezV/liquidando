import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquideComponent } from './liquide.component';

describe('LiquideComponent', () => {
  let component: LiquideComponent;
  let fixture: ComponentFixture<LiquideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
