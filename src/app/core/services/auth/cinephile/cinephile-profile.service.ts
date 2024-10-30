import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { Person } from 'src/app/core/models/user-profile.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  constructor(private _http: HttpClient) {}

  //General
  addPerson(data: Person): Observable<any>{
    return this._http.post(`${environment.serverBasePath}/person`,data);
  }

  getPersonList(): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/person`);
  }

  getUserGender(): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/genders`);
  }

  //Customer
  addCustomer(data: any): Observable<any>{
    return this._http.post(`${environment.serverBasePath}/customers`,data);
  }

  getCustomerList(): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/customers`);
  }

  //Owner
  getBusinessTypeList(): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/businessTypes`);
  }

  addOwner(data: any): Observable<any>{
    return this._http.post(`${environment.serverBasePath}/owners`,data);
  }

  addBusiness(data: any):Observable<any>{
    return this._http.post(`${environment.serverBasePath}/businesses`,data);
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
