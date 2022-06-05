import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private readonly url = 'http://127.0.0.1:5000/enroll';

  constructor(private readonly http: HttpClient) {}

  public enroll(user: User): Observable<any> {
    return this.http.post<any>(this.url, user).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
