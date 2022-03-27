export const getFormStatusesStoreRootSelector = (state) => state.formStatusesStore;
// export const getStatusesInTheAppIsEmailVerificationConfirmationWaitingSelector = (state) => getStatusesInTheAppRootSelector(state).isEmailVerificationConfirmationWaiting || null;
// export const getStatusesInTheAppCountdownForLetterRequestIsNumberSelector = (state) => getStatusesInTheAppRootSelector(state).countdownForLetterRequestIsNumber || null;
// export const getStatusesInTheAppLastAuthorizationDateAndTimeSelector = (state) => getStatusesInTheAppRootSelector(state).lastAuthorizationDateAndTime || null;
// export const getStatusesInTheAppValueInChatsListInputIsSelector = (state) => getStatusesInTheAppRootSelector(state).valueInChatsListInputIs || '';
// export const getStatusesInTheAppIsAquariumOpenSelector = (state) => getStatusesInTheAppRootSelector(state).isAquariumOpen || null;
// export const getStatusesInTheAppappThemeIsSelector = (state) => getStatusesInTheAppRootSelector(state).appThemeIs;
// export const getStatusesInTheAppOnlySelectedChatsBooleanSelector = (state) => getStatusesInTheAppRootSelector(state).onlySelectedChatsBoolean || false;
// export const getStatusesInTheAppChatsCountSelectedSelector = (state) => getStatusesInTheAppRootSelector(state).chatsCountSelected;
// export const getStatusesInTheAppEventForPWAInstallationSelector = (state) => getStatusesInTheAppRootSelector(state).eventForPWAInstallationCase || null;

export const getFormStatusesIsFormLoadingSelector = (state) => getFormStatusesStoreRootSelector(state).isFormLoadingCase || false;
export const getFormStatusesIsFormSuccessSelector = (state) => getFormStatusesStoreRootSelector(state).isFormSuccessCase || false;
export const getFormStatusesShowAdditionalListSelector = (state) => getFormStatusesStoreRootSelector(state).showAdditionalListCase || false;
export const getFormStatusesShowCitiesListCaseSelector = (state) => getFormStatusesStoreRootSelector(state).showCitiesListCase || false;
export const getFormStatusesShowSourceListCaseSelector = (state) => getFormStatusesStoreRootSelector(state).showSourceListCase || false;
