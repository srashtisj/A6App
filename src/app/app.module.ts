import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterState} from '@angular/router';
import {LocationStrategy,PathLocationStrategy, HashLocationStrategy}from '@angular/common';

import {AppComponent} from './app.component'
import {TestComponent} from './test/test.component'

const appRoutes: Routes = [  
  { path: '', component: TestComponent },
  { path: 'test', component: TestComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
