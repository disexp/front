import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { Person } from 'src/app/core/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  constructor(private _http: HttpClient) {}

  //General
  addPerson(data: Person): Observable<any>{
    return this._http.post('http://localhost:3000/person',data);
  }

  getPersonList(): Observable<any>{
    return this._http.get('http://localhost:3000/person');
  }

  getUserGender(): Observable<any>{
    return this._http.get('http://localhost:3000/gender');
  }

  //Customer
  addCustomer(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/customer',data);
  }

  getCustomerList(): Observable<any>{
    return this._http.get('http://localhost:3000/customer');
  }

  //Owner
  getBusinessTypeList(): Observable<any>{
    return this._http.get('http://localhost:3000/businessType');
  }

  addOwner(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/owner',data);
  }

  addBusiness(data: any):Observable<any>{
    return this._http.post('http://localhost:3000/business',data);
  }

  validateCredentials(email: string, password: string): Observable<any>{
    return this.getPersonList().pipe(
      switchMap((userList: any[]) => {
        const user = userList.find(user => user.email === email);

        if (user && user.password === password) {
          // Las credenciales coinciden
          return of({ valid: true, user: user });
        } else {
          // Las credenciales no coinciden
          return of({ valid: false, user: null });
        }
      })
    );
  }

}
