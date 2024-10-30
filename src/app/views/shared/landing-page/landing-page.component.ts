import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  redirectToAuthPage(){
    this.router.navigate(['/authPage']);
  }


  redirectToElection(){
    this.router.navigate(['/user-election']);
  }


}
