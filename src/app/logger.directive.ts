import { Directive } from '@angular/core';

@Directive({
  selector: '[appLogger]'
})
export class LoggerDirective {

  constructor() {
    console.log('LoggerService is created.');
   }

   log(message: string){
    console.log(`%c LoggerService ${message}`, 'color: yellow');
   }


}
