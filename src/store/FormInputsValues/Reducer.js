import { cityAction, sourceAction, value1Action, value2Action, value3Action, value4Action, value5Action, value6Action } from './Action';

const initialState = {};

export const formInputsValuesReducer = (state = initialState, action) => {
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

        // case isFormLoadingAction.type: {
        //     return {
        //         ...state,
        //         isFormLoadingCase: action.payload,
        //     }
        // }
        // case isFormSuccessAction.type: {
        //     return {
        //         ...state,
        //         isFormSuccessCase: action.payload,
        //     }
        // }
        // case showAdditionalListAction.type: {
        //     return {
        //         ...state,
        //         showAdditionalListCase: action.payload,
        //     }
        // }
        // case showCitiesListAction.type: {
        //     return {
        //         ...state,
        //         showCitiesListCase: action.payload,
        //     }
        // }
        // case showSourceListAction.type: {
        //     return {
        //         ...state,
        //         showSourceListCase: action.payload,
        //     }
        // }

        // case errorInput1Action.type: {
        //     return {
        //         ...state,
        //         errorInput1Case: action.payload,
        //     }
        // }
        // case errorInput2Action.type: {
        //     return {
        //         ...state,
        //         errorInput2Case: action.payload,
        //     }
        // }
        // case errorInput3Action.type: {
        //     return {
        //         ...state,
        //         errorInput3Case: action.payload,
        //     }
        // }
        // case errorInput4Action.type: {
        //     return {
        //         ...state,
        //         errorInput4Case: action.payload,
        //     }
        // }
        // case errorCityAction.type: {
        //     return {
        //         ...state,
        //         errorCityCase: action.payload,
        //     }
        // }

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
