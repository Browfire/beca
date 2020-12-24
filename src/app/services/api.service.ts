import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFolders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/folders`);
  }

  getReports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/reports`);
  }
}
