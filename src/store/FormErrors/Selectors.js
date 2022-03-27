export const getFormErrorsStoreRootSelector = (state) => state.formErrorsStore;
export const getFormErrorsErrorInput1CaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorInput1Case || false;
export const getFormErrorsErrorInput2CaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorInput2Case || false;
export const getFormErrorsErrorInput3CaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorInput3Case || false;
export const getFormErrorsErrorInput4CaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorInput4Case || false;
export const getFormErrorsErrorCityCaseSelector = (state) => getFormErrorsStoreRootSelector(state).errorCityCase || false;
