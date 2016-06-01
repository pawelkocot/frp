import {Component, Input} from '@angular/core'
import {Store} from "./redux/store";

@Component({
    selector: 'todo-add',
    template: `
        <input #message /> <input type="button" (click)="add(message.value)" value="Add">
    `
})
export class AddComponent {
    @Input() store:Store

    add(message:string) {
        this.store.dispatch({
            action: 'add',
            payload: {
                message: message
            }
        })
    }
}