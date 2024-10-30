import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class OwnerProfileService {

  constructor(private _http: HttpClient) {}

  addOwner(data: any): Observable<any>{
    return this._http.post(`${environment.serverBasePath}/owners`,data);
  }

  updateOwner(id: number, data: any): Observable<any>{
    return this._http.put(`${environment.serverBasePath}/owners${id}`,data);
  }

  getOwnerList(): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/owners`);
  }
}
