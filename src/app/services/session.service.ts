import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  user: User = new User();

  constructor() { }

}