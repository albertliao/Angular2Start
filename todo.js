if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="/typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var TodoList = (function () {
    function TodoList() {
        this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
        this.todotext = '';
    }
    TodoList.prototype.addTodo = function () {
        if (this.todotext !== '') {
            this.todos.push(this.todotext);
            this.todotext = '';
        }
    };
    TodoList.prototype.removeTodo = function (index) {
        this.todos.splice(index, 1);
    };
    TodoList.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo();
        }
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list'
        }),
        angular2_1.View({
            template: "\n    <ul>\n      <li *ng-for=\"#todo of todos; #i = index\">\n        {{ todo }} <button (click)=\"removeTodo(i)\">X</button>\n      </li>\n    </ul>\n    \n    <input type='text' placeholder=\"Enter an item\" [(ng-model)]=\"todotext\" (keyup)=\"doneTyping($event)\">\n    <button (click)=\"addTodo()\">Add Todo</button>\n\n    <p>You have a total of {{todos.length}} items to do!</p>\n    <p *ng-if=\"todos.length > 3\">Get to work you have a lot to do!</p>\n    <p *ng-if=\"todos.length == 0\">Looks like you can take it easy.</p>\n          ",
            directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
})();
angular2_1.bootstrap(TodoList);
