import {TOGGLE_STATUS, TOGGLE_CONTROL, ADD_NUMBER} from '../actions';

export function changeStatus(){
    return {
        type: TOGGLE_STATUS,
    }
}

export function switchControl(){
    return {
        type: TOGGLE_CONTROL,
    }
}

export function addNumber(number){
    return {
        type: ADD_NUMBER,
        number
    }
}