import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../book';

import { switchMap } from 'rxjs/operators';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  errorMessage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');

    //   this.bookService.getBook(id).subscribe(book => {
    //     this.book = book;

    //     console.log('the book', this.book);
    //   });
    // });

    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('id');

          console.log(id);

          return this.bookService.getBook(id);
        })
      )
      .subscribe(
        book => (this.book = book),
        error => {
          console.log('error', error);

          this.errorMessage = error.error;

          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 3000);
        }
      );
  }
}
