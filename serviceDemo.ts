/// <reference path="/typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {FriendsService} from 'friendService';

// Annotation section
@Component({
  selector: 'service-demo',
  appInjector: [FriendsService]
})
@View({
  templateUrl: '/serviceDemo.tpl',
  directives: [NgFor, NgIf]
})
// Component controller
class ServiceDemoComponent {
  name: string;
  names: Array<string>;
  
  constructor(friendsService: FriendsService) {
    this.name = 'Albert';
    this.names = friendsService.names;
  }
}

bootstrap(ServiceDemoComponent);