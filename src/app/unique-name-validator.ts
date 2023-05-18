import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } 
from '@angular/forms';

import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })

export class UniqueNameValidator implements AsyncValidator{

  constructor(private userService: UserService) {}

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.userService.isNameTaken(control.value).pipe(
      map(isTaken => (isTaken ? { uniqueName: true } : null)),
      catchError(() => of(null))
    );
  }
}
