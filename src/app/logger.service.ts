import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
    console.log('LoggerService is created.');
   }

   log(message: string){
    console.log(`%c LoggerService ${message}`, 'color: red');
   }
}
