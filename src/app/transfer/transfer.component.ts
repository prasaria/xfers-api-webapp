import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response,  RequestOptions } from '@angular/http';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransferComponent implements OnInit {

   transfer: any;
   transferLists: any;

   getTransfer(){
    let headers = new Headers();
    headers.append('X-XFERS-USER-API-KEY', 'k_qoXL6xhF61y31mUqeybns61gz3KYJd6yozWnTQUDY');
    let opts = new RequestOptions();
    opts.headers = headers;
    let apiUrl: string = 'https://sandbox-id.xfers.com/api/v3/user/transfer_info?disable_va=false';

    return this.request
            .get(apiUrl, opts)
            .subscribe(data => {
              this.transfer= data.json();
              this.transferLists = this.transfer.transfer_info_array
            });
  }

   constructor(private http: HttpClient, private request: Http) {}

  ngOnInit() {
    this.getTransfer();
  }

}
