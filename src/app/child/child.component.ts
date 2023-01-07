import { Component, Input, Optional, Host } from '@angular/core';
import {LoggerService} from '../logger.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html', 
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() id!: string;
  constructor(@Optional() @Host() private loggerService?: LoggerService){}

  ngOnInit(): void {
    console.log(this.loggerService )
    this.loggerService?.log(`ChildComponent ${this.id} is created.`);
  }
}
