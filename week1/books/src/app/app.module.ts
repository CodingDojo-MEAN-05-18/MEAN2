import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';

import { TitleizePipe } from './titleize.pipe';

import * as fromBooks from './books';
import * as fromServices from './services';
import * as fromGuards from './guards';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';

// TitleizePipe.skipWords = ['of'];

@NgModule({
  declarations: [
    AppComponent,
    TitleizePipe,
    ...fromBooks.components,
    NavComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [...fromServices.services, ...fromGuards.guards],
  bootstrap: [AppComponent],
})
export class AppModule {}
