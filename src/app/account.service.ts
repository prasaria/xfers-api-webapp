import { Injectable } from '@angular/core';
import { Http, Headers, Response,  RequestOptions } from '@angular/http';

@Injectable()
export class AccountService {
  
  account: {};

  constructor(private http: Http) { }

  getAccount(){
   

    let headers = new Headers();
    headers.append('X-XFERS-USER-API-KEY', 'k_qoXL6xhF61y31mUqeybns61gz3KYJd6yozWnTQUDY');
    let opts = new RequestOptions();
    opts.headers = headers;
    let apiUrl: string = 'https://sandbox-id.xfers.com/api/v3/user';

    return this.http
            .get(apiUrl, opts)
            .subscribe(data => {
              this.account = data.json();
              console.log('inside service', this.account);
            });
  }


}
