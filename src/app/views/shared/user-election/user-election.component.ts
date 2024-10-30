import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-election',
  templateUrl: './user-election.component.html',
  styleUrls: ['./user-election.component.scss']
})
export class UserElectionComponent {

  constructor(private router: Router) {}

  redirectToRegisterCinephile(){
    this.router.navigate(['/authPage/register/:cinephile']);
  }

  redirectToRegisterOwner(){
    this.router.navigate(['/authPage/register/:owner']);
  }

  redirectToLandingPage(){
    this.router.navigate(['/landingPage']);
  }
}
