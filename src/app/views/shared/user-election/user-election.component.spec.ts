import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserElectionComponent } from './user-election.component';

describe('UserElectionComponent', () => {
  let component: UserElectionComponent;
  let fixture: ComponentFixture<UserElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserElectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
