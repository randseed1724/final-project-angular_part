import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../../quotesrequest.service';

@Component({
  selector: 'app-quotes-grid',
  templateUrl: './quotes-grid.component.html',
  styleUrls: ['./quotes-grid.component.css']
})
export class QuotesGridComponent implements OnInit {

  quoteList = [];
  errorMessage: string = '';
  name: string;

  constructor(private quotes: QuotesService) { }


ngOnInit() {

  this.quotes.findUser()
    .then((quotesUser) => {
      this.name = quotesUser;
    })
    .catch((err) => {
      this.errorMessage = 'O.O There was an error. Try again later. O.O';
    });


  this.quotes.getList()
    .then((quotesParam) => {
      this.quoteList = quotesParam;
    })
    .catch((err) => {
      this.errorMessage = 'There was an error. Try again later.';
    });
}

}
