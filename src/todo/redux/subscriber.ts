import {State} from "./state";

export interface StoreSubscriberCallback {
    (value: State):void
}