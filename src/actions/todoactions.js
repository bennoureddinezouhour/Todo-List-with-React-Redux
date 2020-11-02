import {Add_todo} from'./types.js';
import {change_todo} from './types.js';
import{delete_todo} from './types.js';
import{ecrase_todo} from'./types.js';
export const addTodo=(newTodo)=>{
    return{
        type:Add_todo,
        payload:newTodo
    }
}
export const editTodo =(changeTodo)=>{
    return {
        type:change_todo,
        payload:changeTodo
    }
}
export const deleteTodo=(deletetodo)=>{
    return {
        type:delete_todo,
        payload:deletetodo
    }
}
export const ecraseTodo=(ecrasetodo)=>{
    return {
        type:ecrase_todo,
        payload:ecrasetodo
    }
}