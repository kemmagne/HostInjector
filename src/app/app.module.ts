import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ContentComponent } from './content/content.component';
import { ChildComponent } from './child/child.component';
import { LoggerDirective } from './logger.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ContentComponent,
    ChildComponent,
    LoggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
