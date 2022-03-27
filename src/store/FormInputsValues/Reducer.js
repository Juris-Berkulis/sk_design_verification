import { cityAction, sourceAction, value1Action, value2Action, value3Action, value4Action, value5Action, value6Action } from './Action';

const initialState = {};

export const formInputsValuesReducer = (state = initialState, action) => {
    switch(action.type) {
        case value1Action.type: {
            return {
                ...state,
                value1Case: action.payload,
            }
        }
        case value2Action.type: {
            return {
                ...state,
                value2Case: action.payload,
            }
        }
        case value3Action.type: {
            return {
                ...state,
                value3Case: action.payload,
            }
        }
        case value4Action.type: {
            return {
                ...state,
                value4Case: action.payload,
            }
        }
        case value5Action.type: {
            return {
                ...state,
                value5Case: action.payload,
            }
        }
        case value6Action.type: {
            return {
                ...state,
                value6Case: action.payload,
            }
        }
        case cityAction.type: {
            return {
                ...state,
                cityCase: action.payload,
            }
        }
        case sourceAction.type: {
            return {
                ...state,
                sourceCase: action.payload,
            }
        }
        default: {
            return state
        }
    }
};
