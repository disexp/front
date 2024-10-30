import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCineclubsComponent } from './list-cineclubs.component';

describe('ListCineclubsComponent', () => {
  let component: ListCineclubsComponent;
  let fixture: ComponentFixture<ListCineclubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCineclubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCineclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
