import * as types from '../actions'
const initialState = data ? data : [];

export const TaskReducers = (state = initialState, action) => {
    if(action.type === types.ADD_TASK){
        return {
            ...state,
        }
    }
    return state;
}