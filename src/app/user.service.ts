import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const USERS = ['Eric'];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isNameTaken(name: string): Observable<boolean> {
    const isTaken = USERS.includes(name);
    return of(isTaken).pipe(delay(400));
  }
  
}