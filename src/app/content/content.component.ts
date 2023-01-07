import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [LoggerService]
})
export class ContentComponent {
   constructor(private logger: LoggerService){}

   ngOnInit() {
        this.logger.log('ContentComponent is created');
   }
}
