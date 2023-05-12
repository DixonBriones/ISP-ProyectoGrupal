import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL de la API de autenticación
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((data) => {
          // Guardamos el token de autenticación en LocalStorage
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.currentUserSubject.next(data);
        })
      );
  }

  logout(): void {
    // Eliminamos el token de autenticación de LocalStorage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
