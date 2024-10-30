import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { Gender } from 'src/app/core/models/user-profile.model';
import { Customer } from 'src/app/core/models/user-profile.model';
import { Person } from 'src/app/core/models/user-profile.model';
import { Type } from '@angular/compiler';

const dniPattern = /^[0-9]{8}$/;
const phonePattern = /^[0-9]{9}$/;


@Component({
  selector: 'auth-register-cinephile',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  empUserForm: FormGroup;
  exist: boolean = false;
  hide = true;

  genders: Gender[] = [];

  person: Person = {
    firstName: '',
    lastName: '',
    numberDni: '',
    birthdate: '',
    photo: '',
    phone: '',
    email: '',
    password: '',
    Gender_id: {
      id: 0,
    },
    TypeUser_id: {
      id: 1,
    }
  }

  constructor(
    private _fb: FormBuilder,
    private _empService: CinephileProfileService,

    ) {
    this.empUserForm = this._fb.group(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ]),
        Gender_id: new FormControl('', Validators.required),
        number_dni: new FormControl('', [
          Validators.required,
          Validators.pattern(dniPattern),
        ]),
        birthdate: new FormControl('', Validators.required),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern(phonePattern),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validator: this.passwordMatchValidator }
    );
  }
  
  ngOnInit(){
    this.getUserGender();
  }

  onFormSubmit() {
    if (this.empUserForm.valid) {

      const formValue = { ...this.empUserForm.value }; // Eliminar ConfirmPassword
      delete formValue.confirmPassword;

      this.person.firstName = formValue.first_name;
      this.person.lastName = formValue.last_name;
      this.person.numberDni = formValue.number_dni;
      this.person.birthdate = formValue.birthdate;
      this.person.phone = formValue.phone;
      this.person.email = formValue.email;
      this.person.password = formValue.password;
      this.person.Gender_id!.id= formValue.Gender_id;

      this._empService.addPerson(this.person).subscribe({
        next: (addedPerson:any) =>{

          const customerId = addedPerson.id;

          const customer: Customer = {
            id: null,
            Person_id: {
              id: customerId
            }
          };

          this._empService.addCustomer(customer).subscribe({
            next: (addedCustomer: any) => {
              alert('Account successfully created');
              //this._router.navigateByUrl('/home');
            },
            error: (error: any) => {
              console.error(error);
            }
          });
          
        },
        error: (err:any)=>{
          console.error(err);
        }
      })    
    }
  }

  getUserGender(){
    this._empService.getUserGender().subscribe({
      next: (val:any) =>{
        this.genders = val
      },
      error: (err:any)=>{
        console.error(err);
      }
    })
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ mismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  
    return null;
  };
  

}
