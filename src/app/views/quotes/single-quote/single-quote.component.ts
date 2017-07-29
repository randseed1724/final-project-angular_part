import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../../quotesrequest.service';

@Component({
  selector: 'app-single-quote',
  templateUrl: './single-quote.component.html',
  styleUrls: ['./single-quote.component.css']
})

export class SingleQuoteComponent implements OnInit {

  // quote: string ;
  // errorMessage: string;
  //
  // constructor(private thisquote: QuotesService) { }
  //
  ngOnInit() {
  //     this.thisquote.getList()
  //       .then((quotesList) => {
  //         this.quote = quotesList;
  //       })
  //       .catch((err) => {
  //         this.errorMessage = 'There was an error. Try again later.';
  //       });
  }
}


  //RANDOM QUOTE


      //
      // onequote = thisquote[getRandomQuote()]
      // this.quotes.getRandomQuote()
      //   .then((quotesList) => {
      //     this.quotes = quotesList;
      //   })
      //   .catch((err) => {
      //     this.errorMessage = 'There was an error. Try again later.';
      //   });
        // .then(()=> {
        //   this.quotes.forEach((phone)=>{
        //     console.log(phone.image);
        //     if(phone.image.indexOf("http")!==0){
        //
        //       phone.image = "http://localhost:3000"+phone.image
        //     }
            // phone.image = this._DomSanitizater.bypassSecurityTrustUrl(phone.image);
            // console.log(phone.image);
            // console.log('');
          // });
        // });
    // }

    // getRandomQuote(arrayLength: number): number{
    // return Math.ceil(Math.random() * arrayLength) - 1;
    // }
