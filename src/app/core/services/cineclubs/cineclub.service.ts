import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from 'src/app/core/models/cineclub.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CineclubService {

  public moviesList:Business[]=[]
  private apiURL=`${environment.serverBasePath}/businessTypes`
  constructor(private http: HttpClient) {
    this.getCineclubs()
   }

  public getCineclubs(): Observable<Business[]> {
    return this.http.get<Business[]>(this.apiURL);
  }

  public getCineclubById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  public searchCineclubs(title: string, cineclubs: Business[]): Business[] {

    return cineclubs.filter(cineclub => cineclub.name.toLowerCase().includes(title.toLowerCase()));
  }
  public get(url:string){
    return this.http.get(url); //Get host

  }
}
