import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template:'<p>{{name}}</p>'
})
export class TestComponent {
  name: string = 'path /';

  constructor(){
  if(window.location.href.indexOf('/test') > 0)
    this.name = 'path Test'
  }
 }
