import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

// import { BOOKS } from '../data/book-data';
import { Book } from '../book';

@Injectable()
export class BookService {
  // private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private base = '/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  deleteBook(book: Book): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${book._id}`);
  }
}
