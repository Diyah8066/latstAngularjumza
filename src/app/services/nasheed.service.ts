import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Nasheed } from '../models/nasheed';

@Injectable({
  providedIn: 'root'
})
export class NasheedService {
 private apiUrl: string = environment.apiUrl + 'nasheed';

 constructor(private http: HttpClient) {}

 getAll(): Observable<Nasheed[]> {
   return this.http.get<Nasheed[]>(
     this.apiUrl 
   );
   }


  getById(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Nasheed>(url);
  }


  add(data: any): Observable<any> {
    return this.http.post <Nasheed>(this.apiUrl, data);
  }

  update(id: any, body: any): Observable<Nasheed> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Nasheed>(url,body);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
 

    

}
