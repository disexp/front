import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAvailableComponent } from './movies-available.component';

describe('MoviesAvailableComponent', () => {
  let component: MoviesAvailableComponent;
  let fixture: ComponentFixture<MoviesAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
