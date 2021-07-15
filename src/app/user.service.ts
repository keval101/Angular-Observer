import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // activateUser  = new EventEmitter<boolean>();
  activateUser = new Subject<boolean>()
}
