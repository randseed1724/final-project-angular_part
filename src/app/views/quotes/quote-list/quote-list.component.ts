import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../../quotesrequest.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})

export class QuoteListComponent implements OnInit {

  quoteList = [];
  errorMessage: string = '';

  constructor(private quotes: QuotesService) { }


ngOnInit() {
  this.quotes.getList()
    .then((quotesParam) => {
      this.quoteList = quotesParam;
    })
    .catch((err) => {
      this.errorMessage = 'There was an error. Try again later.';
    });
}

}
