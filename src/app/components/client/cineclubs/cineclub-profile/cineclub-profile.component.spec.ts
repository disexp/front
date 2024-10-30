import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineclubProfileComponent } from './cineclub-profile.component';

describe('CineclubProfileComponent', () => {
  let component: CineclubProfileComponent;
  let fixture: ComponentFixture<CineclubProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineclubProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CineclubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
