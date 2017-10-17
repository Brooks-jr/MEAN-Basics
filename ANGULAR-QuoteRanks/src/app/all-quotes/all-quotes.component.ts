import { Component, OnInit,  Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-all-quotes',
  templateUrl: './all-quotes.component.html',
  styleUrls: ['./all-quotes.component.css']
})
export class AllQuotesComponent implements OnInit
  {

    @Input() quotes;
    @Output() deleteQuoteEvent = new EventEmitter();
    
    constructor() { }
    ngOnInit() { }

    upVote(quote) 
      {
        quote.rating++;
      }
    
    downVote(quote) 
      {
        quote.rating--;
      }
  
    delete(quote) 
      {
        this.deleteQuoteEvent.emit(quote);
      }

  }
