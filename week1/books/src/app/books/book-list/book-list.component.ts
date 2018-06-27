import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Book } from '../../book';

import { BookService } from '../../services';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Array<Book> = [];
  sub: Subscription;

  selectedBook: Book;

  constructor(
    private titleize: TitleizePipe,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.sub = this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.books.forEach(book => {
        book.author = this.titleize.transform(book.author);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(book: Book) {
    console.log('selecting book', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook !== book) {
    //   this.selectedBook = book;
    // } else {
    //   this.selectedBook = null;
    // }
  }

  onCreate(book: Book) {
    console.log('creating book', book);
    this.books.push(book);
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('stopping prop', event);
  }

  onDelete(bookToDelete: Book) {
    console.log('deleting book');
    this.bookService.deleteBook(bookToDelete).subscribe(deletedBook => {
      console.log('deleted book', deletedBook);

      this.books = this.books.filter(book => book.id !== deletedBook.id);
    });
  }
}
