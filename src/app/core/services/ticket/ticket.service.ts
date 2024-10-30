import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http: HttpClient) { }

/*   addTicket(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/Ticket',data);
  } */

  addTicket(data: any): Observable<any>{
    return this._http.post(`${environment.serverBasePath}/tickets`,data);
  }


}
