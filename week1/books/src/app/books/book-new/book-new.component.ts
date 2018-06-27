import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookService } from '../../services';
import { Book } from '../../book';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit, OnDestroy {
  book = new Book();
  sub: Subscription;

  @Output() newBook = new EventEmitter<Book>();

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    this.sub = this.bookService.createBook(this.book).subscribe(book => {
      console.log('book from api', book);
      this.newBook.emit(book);
      this.book = new Book();
      form.reset();
    });

    // this.books.push(this.book);

    // console.log('books', this.books);
  }
}
