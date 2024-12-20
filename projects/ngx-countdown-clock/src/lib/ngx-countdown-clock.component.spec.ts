import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCountdownClockComponent } from './ngx-countdown-clock.component';

describe('NgxCountdownClockComponent', () => {
  let component: NgxCountdownClockComponent;
  let fixture: ComponentFixture<NgxCountdownClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCountdownClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCountdownClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
