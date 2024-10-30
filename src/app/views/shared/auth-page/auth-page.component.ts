import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit{

  parametro: string | undefined;
  selectedTabIndex = 0;
  showCinephileRegister = false;
  showOwnerRegister = false;
  showUserElection = false;

  cinephileButtonSelected = false;
  ownerButtonSelected = false;

  constructor(private route: ActivatedRoute,
              private router: Router
    
    ) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.parametro = params.get('owner') || params.get('cinephile') || '';; 

      console.log (this.parametro)

      this.redirectToRegisterCinephile();
      this.redirectToRegisterOwner()
      this.showUserElectionTab();
    });
  }

  redirectToRegisterCinephile() {

    if (this.parametro == ":cinephile"){
      this.selectedTabIndex = 1;
      this.showCinephileRegister = true;
      this.showOwnerRegister = false;
      this.showUserElection = false;
    }
  }

  redirectToRegisterOwner() {

    if (this.parametro == ":owner"){
      this.selectedTabIndex = 1;
      this.showCinephileRegister = false;
      this.showOwnerRegister = true; 
      this.showUserElection = false;
    }

  }

  showUserElectionTab() {
    if (this.parametro == ""){
      this.showCinephileRegister = false;
      this.showOwnerRegister = false; 
      this.showUserElection = true;
    }
  }

  redirectToUserElection() {
    if(this.parametro == ":cinephile" || this.parametro == ":owner" ){
      this.router.navigate(['/user-election']);
    }else{
      this.router.navigate(['/']);
    }
  }

  selectCinephile() {
    this.cinephileButtonSelected = true;
    this.ownerButtonSelected = false;
    this.showCinephileRegister = true;
    this.showOwnerRegister = false;
  }
  
  selectOwner() {
    this.cinephileButtonSelected = false;
    this.ownerButtonSelected = true;
    this.showCinephileRegister = false;
    this.showOwnerRegister = true; 
  }
}
