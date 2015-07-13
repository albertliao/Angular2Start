/// <reference path="/typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'basic-demo'
})
@View({
  template: '<h1>Basic Demo</h1><span>Hello {{name}}</span>'
})
// Component controller
class BasicDemoComponent {
  name: string;
  
  constructor() {
    this.name = 'World!';
  }
}

bootstrap(BasicDemoComponent);