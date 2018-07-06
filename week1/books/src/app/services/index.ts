import { BookService } from './book.service';
import { AuthService } from './auth.service';

export const services: any[] = [AuthService, BookService];

export * from './auth.service';
export * from './book.service';
