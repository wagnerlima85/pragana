import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {

  constructor() { }

  getDefaultName():string{
    return "";
  }
  getDefaultMessage():string{
    return "";
  }
  getDefaultEmail():string{
    return "";
  }

}
