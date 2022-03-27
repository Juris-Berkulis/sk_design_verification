import { isFormLoadingAction, isFormSuccessAction, showAdditionalListAction, showCitiesListAction, showSourceListAction } from './Action';

const initialState = {};

export const formStatusesReducer = (state = initialState, action) => {
    switch(action.type) {
        // case emailVerificationConfirmationWaitingIsTrue.type: {
        //     return {
        //         ...state, 
        //         isEmailVerificationConfirmationWaiting: true,
        //     }
        // }
        // case emailVerificationConfirmationWaitingIsFalse.type: {
        //     return {
        //         ...state, 
        //         isEmailVerificationConfirmationWaiting: false,
        //     }
        // }
        // case countdownForLetterRequest.type: {
        //     return {
        //         ...state, 
        //         countdownForLetterRequestIsNumber: action.payload,
        //     }
        // }
        // case lastAuthorization.type: {
        //     return {
        //         ...state,
        //         lastAuthorizationDateAndTime: action.payload,
        //     }
        // }
        // case valueInChatsListInput.type: {
        //     return {
        //         ...state,
        //         valueInChatsListInputIs: action.payload,
        //     }
        // }
        // case aquariumStatus.type: {
        //     return {
        //         ...state,
        //         isAquariumOpen: action.payload,
        //     }
        // }
        // case appTheme.type: {
        //     return {
        //         ...state,
        //         appThemeIs: action.payload,
        //     }
        // }
        // case onlySelectedChats.type: {
        //     return {
        //         ...state,
        //         onlySelectedChatsBoolean: action.payload,
        //     }
        // }
        // case chatsCount.type: {
        //     return {
        //         ...state,
        //         chatsCountSelected: action.payload,
        //     }
        // }
        // case eventForPWAInstallation.type: {
        //     return {
        //         ...state,
        //         eventForPWAInstallationCase: action.payload,
        //     }
        // }

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
