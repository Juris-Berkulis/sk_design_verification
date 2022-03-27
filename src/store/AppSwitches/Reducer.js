import { isFormLoadingAction, isFormSuccessAction, showAdditionalListAction, showCitiesListAction, showSourceListAction } from './Action';

const initialState = {};

export const formStatusesReducer = (state = initialState, action) => {
    switch(action.type) {
        case isFormLoadingAction.type: {
            return {
                ...state,
                isFormLoadingCase: action.payload,
            }
        }
        case isFormSuccessAction.type: {
            return {
                ...state,
                isFormSuccessCase: action.payload,
            }
        }
        case showAdditionalListAction.type: {
            return {
                ...state,
                showAdditionalListCase: action.payload,
            }
        }
        case showCitiesListAction.type: {
            return {
                ...state,
                showCitiesListCase: action.payload,
            }
        }
        case showSourceListAction.type: {
            return {
                ...state,
                showSourceListCase: action.payload,
            }
        }
        default: {
            return state
        }
    }
};
