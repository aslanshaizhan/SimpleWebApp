import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymWorkComponent } from './gym-work.component';

describe('GymWorkComponent', () => {
  let component: GymWorkComponent;
  let fixture: ComponentFixture<GymWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
