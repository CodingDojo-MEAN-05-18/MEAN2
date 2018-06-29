import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromBooks from './books';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent,
      },
      {
        path: 'new',
        component: fromBooks.BookNewComponent,
      },
      {
        path: ':id',
        component: fromBooks.BookDetailComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
