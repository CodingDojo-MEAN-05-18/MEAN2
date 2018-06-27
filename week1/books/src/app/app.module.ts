import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TitleizePipe } from './titleize.pipe';

import * as fromBooks from './books';
import * as fromServices from './services';

// TitleizePipe.skipWords = ['of'];

@NgModule({
  declarations: [AppComponent, TitleizePipe, ...fromBooks.components],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [...fromServices.services],
  bootstrap: [AppComponent],
})
export class AppModule {}
