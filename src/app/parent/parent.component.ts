import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [LoggerService]

})
export class ParentComponent {
  constructor(private logger: LoggerService){}

  ngOnInit() {
       this.logger.log('ParentComponent is created');
  }
}
