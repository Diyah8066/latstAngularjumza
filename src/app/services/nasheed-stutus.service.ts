import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NasheedStutus } from '../models/nasheed-stutus';

@Injectable({
  providedIn: 'root'
})
export class NasheedStutusService {
  private apiUrl: string = environment.apiUrl + 'nasheedStatus';

constructor(private http: HttpClient) {}

getAll(): Observable<NasheedStutus[]> {
  return this.http.get<NasheedStutus[]>(
    this.apiUrl 
  );
  }


 getById(id: any): Observable<any> {
   const url = `${this.apiUrl}/${id}`;
   return this.http.get<NasheedStutus>(url);
 }


 add(data: any): Observable<any> {
  return this.http.post <NasheedStutus>(this.apiUrl, data);
}

 update(id: any, body: any): Observable<NasheedStutus> {
   const url = `${this.apiUrl}/${id}`;
   return this.http.put<NasheedStutus>(url,body);
 }

 delete(id: any): Observable<any> {
   return this.http.delete(`${this.apiUrl}/${id}`);
 }
 
}
