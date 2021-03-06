import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WriteQuoteService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/quote`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }


  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/quote/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

//       req.body will be equal to dataToSend
  createNew(dataToSend) {
    return this.myHttp.post(`${this.BASE_URL}/api/quote`, dataToSend)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  remove(id) {
    return this.myHttp.delete(`${this.BASE_URL}/api/quote/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
}
