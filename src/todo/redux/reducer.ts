import {State} from "./state";
import {Action} from "./action";

export interface Reducer {
    (state:State, action:Action):State
}