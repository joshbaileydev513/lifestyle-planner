import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss']
})

export class MotivationComponent implements OnInit {
  quotes: any[] = [];

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.loadQuotes();
  }

  loadQuotes(): void {
    this.quotesService.getQuotes().subscribe({
      next: (data) => {
        this.quotes = data;
        console.log(data); // Optional: to see data in the console
      },
      error: (err) => console.error('Error fetching quotes:', err),
      complete: () => console.log('Quotes fetch completed') // Optional
    });
  }
}
