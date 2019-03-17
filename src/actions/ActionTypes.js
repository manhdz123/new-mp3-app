import {TOGGLE_STATUS, TOGGLE_CONTROL, ADD_NUMBER} from '../actions';

export function changeStatus(){
    return {
        type: TOGGLE_STATUS,
        status: !state.status
    }
}

export function switchControl(){
    return {
        type: TOGGLE_CONTROL,
        disabled: !state.disabled
    }
}

export function addNumber(newNumber){
    return {
        type: ADD_NUMBER,
        newNumber
    }
}