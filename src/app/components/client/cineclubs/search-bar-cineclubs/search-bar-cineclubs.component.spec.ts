import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCineclubsComponent } from './search-bar-cineclubs.component';

describe('SearchBarCineclubsComponent', () => {
  let component: SearchBarCineclubsComponent;
  let fixture: ComponentFixture<SearchBarCineclubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarCineclubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarCineclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
