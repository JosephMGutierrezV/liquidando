import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLiquideComponent } from './resume-liquide.component';

describe('ResumeLiquideComponent', () => {
  let component: ResumeLiquideComponent;
  let fixture: ComponentFixture<ResumeLiquideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeLiquideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeLiquideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
