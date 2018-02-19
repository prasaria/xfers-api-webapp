import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response,  RequestOptions } from '@angular/http';
// import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {

  account: any;

  constructor(private http: HttpClient, private request: Http) {}

  getAccount(){
    let headers = new Headers();
    headers.append('X-XFERS-USER-API-KEY', 'k_qoXL6xhF61y31mUqeybns61gz3KYJd6yozWnTQUDY');
    let opts = new RequestOptions();
    opts.headers = headers;
    let apiUrl: string = 'https://sandbox-id.xfers.com/api/v3/user';

    return this.request
            .get(apiUrl, opts)
            .subscribe(data => {
              this.account = data.json();
            });
  }

  ngOnInit() {
    this.getAccount(); 
  }

}

