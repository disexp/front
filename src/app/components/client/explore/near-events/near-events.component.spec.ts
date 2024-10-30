import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearEventsComponent } from './near-events.component';

describe('NearEventsComponent', () => {
  let component: NearEventsComponent;
  let fixture: ComponentFixture<NearEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
