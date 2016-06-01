import {Component, Input} from '@angular/core'
import {Todo} from "./todo";
import {Store} from "./redux/store";
import {State} from "./redux/state";

@Component({
    selector: 'todo-list',
    template: `
        <ul>
            <li *ngFor="let todo of todos" (click)="remove(todo.id)">#{{ todo.id }} {{ todo.message }}</li>
        </ul>
    `
})
export class ListComponent {
    @Input() store:Store

    public todos:Todo[]

    ngAfterViewInit() {
        //noinspection TypeScriptValidateTypes
        this.store.subscribe((state:State) => this.todos = state.todos)
    }
    
    remove(id:number) {
        this.store.dispatch({
            action: 'remove',
            payload: {
                id: id
            }
        })
    }
}