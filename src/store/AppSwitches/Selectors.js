export const getFormStatusesStoreRootSelector = (state) => state.formStatusesStore;
export const getFormStatusesIsFormLoadingSelector = (state) => getFormStatusesStoreRootSelector(state).isFormLoadingCase || false;
export const getFormStatusesIsFormSuccessSelector = (state) => getFormStatusesStoreRootSelector(state).isFormSuccessCase || false;
export const getFormStatusesShowAdditionalListSelector = (state) => getFormStatusesStoreRootSelector(state).showAdditionalListCase || false;
export const getFormStatusesShowCitiesListCaseSelector = (state) => getFormStatusesStoreRootSelector(state).showCitiesListCase || false;
export const getFormStatusesShowSourceListCaseSelector = (state) => getFormStatusesStoreRootSelector(state).showSourceListCase || false;
