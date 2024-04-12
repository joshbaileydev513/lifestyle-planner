import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiUrl = '/api/quotes/'; // Use the local path that gets proxied
  private apiKey = ''; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.apiKey}`);
  }
}

