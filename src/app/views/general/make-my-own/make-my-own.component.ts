import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WriteQuoteService } from '../../../write-your-quote.service';



@Component({
  selector: 'app-make-my-own',
  templateUrl: './make-my-own.component.html',
  styleUrls: ['./make-my-own.component.css']
})

export class NewQuoteComponent implements OnInit {

  newQuote: Object;
  quote: String;
  author: String;
  allUserQuotes: Array<any> = [];
  submited: boolean = false;
  // image: String;

  constructor(
    private myRoute: ActivatedRoute,
    private myWriteQuoteService: WriteQuoteService,
    private myNavigator: Router
  ) { };

  ngOnInit() {
      this.myRoute.params
        .subscribe((params) => this.newQuote = {} );
    }

  createNewQuote(formData){
    console.log(formData);
    this.quote = formData.form.controls.quote._value;
    this.author = formData.form.controls.author._value;
    // this.image = formData.form.controls.image._value;
    this.sendNewQuoteToApi();
  }

  sendNewQuoteToApi(){
    this.newQuote = {
      quote: this.quote,
      author: this.author,
      // image: this.image
    }
    this.myWriteQuoteService.createNew(this.newQuote).then((oneQuote)=>{
      this.quote = "";
      this.author = "";
      // this.image = "";
      this.newQuote = {};
      this.allUserQuotes.push(oneQuote);
      this.submited = true;
    });
  }

}
