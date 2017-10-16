import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})


export class NewQuoteComponent implements OnInit 
  {

    @Input() quotes;
    @Output() addQuoteEvent = new EventEmitter();

    addQuote = {text:"", by:"",rating: 0};

    constructor() { }
    ngOnInit() { }

    onSubmit(input)
      {
        this.addQuoteEvent.emit(this.addQuote);
        this.addQuote = {text:"", by:"",rating: 0};
      }

  }
