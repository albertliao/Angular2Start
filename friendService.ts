/// <reference path="/typings/angular2/angular2.d.ts" />

export class FriendsService {
  names: Array<string>;
  constructor() {
    this.names = ["Mike", "Kris", "Paul", "Chris", "Ariana", "Colin"];
  }
}