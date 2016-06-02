import {Component, ElementRef, ViewChild} from '@angular/core'
import {Store} from './redux/store'
import {Action} from './redux/action'
import {Todo} from './todo'
import {State} from "./redux/state";
import {Reducer} from "./redux/reducer";
import {ListComponent} from "./list.component";
import {AddComponent} from "./add.component";

const reducer:Reducer = (state:State, action:Action) => {
    switch (action.action) {
        case 'remove':
            return {
                todos: state.todos.filter((todo:Todo) => todo.id != action.payload.id)
            }
        case 'add':
            return {
                todos: state.todos.concat(new Todo(action.payload.message))
            }
    }
    return state;
}

//noinspection TypeScriptValidateTypes
@Component({
    selector: 'app',
    directives: [ListComponent, AddComponent],
    template: `
        <todo-add [store]="store"></todo-add>
        <todo-list [store]="store"></todo-list>
    `,
})
export class AppComponent {
    private store:Store

    constructor() {
        this.store = new Store({todos:[]}, reducer);
    }
}