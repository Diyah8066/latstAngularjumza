import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Munsheed } from '../models/munsheed';

@Injectable({
  providedIn: 'root'
})
export class MunsheedService {
 
 
  
  private apiUrl: string = environment.apiUrl + 'customer';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Munsheed[]> {
    return this.http.get<Munsheed[]>(
      this.apiUrl 
    );
    }
 


  getById(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Munsheed>(url);
  }

  // getByEmail(email: any): Observable<any> {
  //   const url = `${this.apiUrl}/getLoginByEmail/${email}`;
  //   return this.http.get<Munsheed>(url);
  // }

  add(data: any): Observable<any> {
    return this.http.post <Munsheed>(this.apiUrl, data);
  }

  update(id: any, body: any): Observable<Munsheed> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Munsheed>(url,body);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
 }

    
    
