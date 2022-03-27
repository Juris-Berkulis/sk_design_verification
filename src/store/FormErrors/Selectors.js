export const getFormErrorsStoreRootSelector = (state) => state.formErrorsStore;
// export const getStatusesInTheAppIsEmailVerificationConfirmationWaitingSelector = (state) => getStatusesInTheAppRootSelector(state).isEmailVerificationConfirmationWaiting || null;
// export const getStatusesInTheAppCountdownForLetterRequestIsNumberSelector = (state) => getStatusesInTheAppRootSelector(state).countdownForLetterRequestIsNumber || null;
// export const getStatusesInTheAppLastAuthorizationDateAndTimeSelector = (state) => getStatusesInTheAppRootSelector(state).lastAuthorizationDateAndTime || null;
// export const getStatusesInTheAppValueInChatsListInputIsSelector = (state) => getStatusesInTheAppRootSelector(state).valueInChatsListInputIs || '';
// export const getStatusesInTheAppIsAquariumOpenSelector = (state) => getStatusesInTheAppRootSelector(state).isAquariumOpen || null;
// export const getStatusesInTheAppappThemeIsSelector = (state) => getStatusesInTheAppRootSelector(state).appThemeIs;
// export const getStatusesInTheAppOnlySelectedChatsBooleanSelector = (state) => getStatusesInTheAppRootSelector(state).onlySelectedChatsBoolean || false;
// export const getStatusesInTheAppChatsCountSelectedSelector = (state) => getStatusesInTheAppRootSelector(state).chatsCountSelected;
// export const getStatusesInTheAppEventForPWAInstallationSelector = (state) => getStatusesInTheAppRootSelector(state).eventForPWAInstallationCase || null;

// export const getStatusesInTheAppIsFormLoadingSelector = (state) => getStatusesInTheAppRootSelector(state).isFormLoadingCase || false;
// export const getStatusesInTheAppIsFormSuccessSelector = (state) => getStatusesInTheAppRootSelector(state).isFormSuccessCase || false;
// export const getStatusesInTheAppShowAdditionalListSelector = (state) => getStatusesInTheAppRootSelector(state).showAdditionalListCase || false;
// export const getStatusesInTheAppShowCitiesListCaseSelector = (state) => getStatusesInTheAppRootSelector(state).showCitiesListCase || false;
// export const getStatusesInTheAppShowSourceListCaseSelector = (state) => getStatusesInTheAppRootSelector(state).showSourceListCase || false;

export const getFormErrorsErrorInput1CaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorInput1Case || false;
export const getFormErrorsErrorInput2CaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorInput2Case || false;
export const getFormErrorsErrorInput3CaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorInput3Case || false;
export const getFormErrorsErrorInput4CaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorInput4Case || false;
export const getFormErrorsErrorCityCaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorCityCase || false;
