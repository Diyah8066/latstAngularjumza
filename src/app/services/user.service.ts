import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.apiUrl + 'user';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(
      this.apiUrl 
    );
    }

    getById(id: any): Observable<any> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<User>(url);
    }

    add(data: any): Observable<any> {
      return this.http.post <User>(this.apiUrl, data);
    }
  
    update(id: any, body: any): Observable<User> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.put<User>(url,body);
    }
  
    delete(id: any): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
