import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { TransferComponent } from './transfer/transfer.component';

const appRoutes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    data: { title: 'My Account' }
  },
  { path: '',
    redirectTo: '/account',
    pathMatch: 'full'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
