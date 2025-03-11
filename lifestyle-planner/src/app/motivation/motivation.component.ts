import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss']
})
export class MotivationComponent implements OnInit {
  quotes: any[] = []; // Define the quotes property as an array
  quoteText: string | undefined;
  quoteAuthor: string | undefined;

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.fetchQuote();
  }

  fetchQuote(): void {
    this.quotesService.getQuote().subscribe((quote: any) => {
      this.quotes.push({ content: quote.content, author: quote.author }); // Push the fetched quote into the quotes array
      this.quoteText = quote.content; // Set the quoteText for display
      this.quoteAuthor = quote.author; // Set the quoteAuthor for display
    });
  }
}