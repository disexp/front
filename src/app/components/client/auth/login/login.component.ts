import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { Cinephile } from 'src/app/core/models/cinephile.model';

@Component({
  selector: 'client-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  empLoginForm: FormGroup;

  hide = true;
  checked = true;
  perfil: Cinephile[] = [];
  searchQuery = '';
  showError = false;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _empService: CinephileProfileService,

  ){

    this.empLoginForm = this._fb.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      }
    )
  }

  onFormSubmit(){
    if (this.empLoginForm.valid) {
      // Simula un inicio de sesión exitoso sin autenticación
      console.log('Inicio de sesión simulado');
      this.router.navigate(['dashboard']);
    }
  }

  redirectToViewProfile(){
    this.router.navigate(['/perfil']);
  }
}
