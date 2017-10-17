import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
  {
    title = 'Angular Quote Ranks';

    quotes = [];

    addQuote(quote)
      {
        this.quotes.push(quote);
      }

    deleteQuote(quote) 
      {
        const idx = this.quotes.indexOf(quote);
        this.quotes.splice(idx, 1);
      }
  }
