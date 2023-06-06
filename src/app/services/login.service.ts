import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private apiUrl: String = environment.apiUrl + 'login'

  constructor(
    private http:HttpClient,
    ) { }

  login(username: any, password:any): Observable<any>{
    const url =`${this.apiUrl}/${username}/${password}`;
    return this.http.get<Login>(url);
  }
}
