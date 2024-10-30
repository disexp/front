import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineclubDetailsComponent } from './cineclub-details.component';

describe('CineclubDetailsComponent', () => {
  let component: CineclubDetailsComponent;
  let fixture: ComponentFixture<CineclubDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineclubDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CineclubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
