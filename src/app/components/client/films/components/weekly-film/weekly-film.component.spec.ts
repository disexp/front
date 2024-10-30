import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyFilmComponent } from './weekly-film.component';

describe('WeeklyFilmComponent', () => {
  let component: WeeklyFilmComponent;
  let fixture: ComponentFixture<WeeklyFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
