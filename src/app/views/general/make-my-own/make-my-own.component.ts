import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotesService } from '../../../quotesrequest.service';



@Component({
  selector: 'app-make-my-own',
  templateUrl: './make-my-own.component.html',
  styleUrls: ['./make-my-own.component.css']
})

export class NewQuoteComponent implements OnInit {

//MAKING it an OBJECT
  newQuote: Object;

//QUOTE MODEL
  quote: String;
  author: String;
  category: Array<any> = [];
  order: Number;

//SAVING QUOTE
  allUserQuotes: Array<any> = [];
  submited: boolean = false;

  constructor(
    private myRoute: ActivatedRoute,
    private myWriteQuoteService: QuotesService,
    private myNavigator: Router
  ) { };

  ngOnInit() {
      this.myRoute.params
        .subscribe((params) => this.newQuote = {} );
    }

  createNewQuote(formData){
    console.log(formData);
    this.quote    = formData.form.controls.quote._value;
    this.author   = formData.form.controls.author._value;
    this.category = formData.form.controls.category._value;
    this.order    = formData.form.controls.order._value;
    this.sendNewQuoteToApi();
  }

  sendNewQuoteToApi(){
    this.newQuote = {
      quote: this.quote,
      author: this.author,
      category: this.category,
      order: this.order,
    }
    this.myWriteQuoteService.createNew(this.newQuote).then((oneQuote)=>{
      this.quote = "";
      this.author = "";
      this.category = [];
      this.order = 0;
      // this.image = "";
      this.newQuote = {};
      this.allUserQuotes.push(oneQuote);
      this.submited = true;
    });
  }

}
