import {BehaviorSubject} from 'rxjs/Rx'
import {State} from './state'
import {Action} from "./action";
import {Reducer} from "./reducer";
import {StoreSubscriberCallback} from "./subscriber";

export class Store {
    private subject:BehaviorSubject<State>

    constructor(initState:State, private reducer:Reducer) {
        this.subject = new BehaviorSubject<State>(initState)
    }
    
    public dispatch(action:Action) {
        this.subject.next(this.reducer(this.subject.getValue(), action))
    }
    
    public subscribe(callback:StoreSubscriberCallback) {
        this.subject.subscribe(callback)
    }
}