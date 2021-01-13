import {Action} from '@ngrx/store'

export const ADD_ITEM='[TODO] ADD';
export const CLEAR_ALL='[TODO] REMOVE';

export class AddItem implements Action{
    constructor(public payload:Array<any>){
        console.log(this.payload);
    }
    readonly type=ADD_ITEM;
}

export class ClearAll implements Action{
    constructor(){}
    readonly type=CLEAR_ALL
}

export type All= AddItem|ClearAll;