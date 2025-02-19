import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiUrl = 'https://zenquotes.io/api/quotes/'; // Your API URL here
  private apiKey = ''; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.apiKey}`);
  }
}

