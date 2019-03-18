import { TOGGLE_STATUS, TOGGLE_CONTROL, ADD_NUMBER } from '../actions';

const initialState = {
    status: false,
    disabled: false,
    number: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CONTROL:
            return {
                ...state,
                disabled: !state.disabled
            }

        case TOGGLE_STATUS:
            return {
                ...state,
                status: !state.status
            }

        case ADD_NUMBER:
            console.log(action);
            return {
                ...state,
                number: [...state.number, action.number]
            }

        default:
            return state;
    }
}