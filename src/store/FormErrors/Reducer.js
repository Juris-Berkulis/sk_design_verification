import { errorCityAction, errorInput1Action, errorInput2Action, errorInput3Action, errorInput4Action } from './Action';

const initialState = {};

export const formErrorsReducer = (state = initialState, action) => {
    switch(action.type) {
        case errorInput1Action.type: {
            return {
                ...state,
                errorInput1Case: action.payload,
            }
        }
        case errorInput2Action.type: {
            return {
                ...state,
                errorInput2Case: action.payload,
            }
        }
        case errorInput3Action.type: {
            return {
                ...state,
                errorInput3Case: action.payload,
            }
        }
        case errorInput4Action.type: {
            return {
                ...state,
                errorInput4Case: action.payload,
            }
        }
        case errorCityAction.type: {
            return {
                ...state,
                errorCityCase: action.payload,
            }
        }
        default: {
            return state
        }
    }
};
