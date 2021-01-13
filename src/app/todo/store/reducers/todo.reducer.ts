import * as todoActions from '../actions/todo.actions'
import { Todo } from '../models/todo.model'

export type Action=todoActions.All;

const defaultTodo: Todo={
    todoList:[]
}

const newState=(state,newstate)=>{
    return Object.assign({},state,newstate);
}

export function todoReducer(state:Todo=defaultTodo, action:Action){
    // console.log(action,state);
    switch(action.type){
        case todoActions.ADD_ITEM:
            {
                console.log(action,state)
        return  {todoList:action.payload};
            }
        case todoActions.CLEAR_ALL:
            return defaultTodo;
        default:
            return defaultTodo;
    }
}