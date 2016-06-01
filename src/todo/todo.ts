let counter = 0

export class Todo {
    private _id:number;
    
    constructor(private _message:string) {
        this._id = ++counter
    }
    
    get id():number {
        return this._id
    }
    
    get message():string {
        return this._message
    }
}