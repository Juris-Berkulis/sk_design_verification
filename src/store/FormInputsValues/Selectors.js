export const getFormInputsValuesStoreRootSelector = (state) => state.formInputsValuesStore;
export const getFormInputsValuesValue1Selector = (state) => getFormInputsValuesStoreRootSelector(state).value1Case || '';
export const getFormInputsValuesValue2Selector = (state) => getFormInputsValuesStoreRootSelector(state).value2Case || '';
export const getFormInputsValuesValue3Selector = (state) => getFormInputsValuesStoreRootSelector(state).value3Case || '';
export const getFormInputsValuesValue4Selector = (state) => getFormInputsValuesStoreRootSelector(state).value4Case || '';
export const getFormInputsValuesValue5Selector = (state) => getFormInputsValuesStoreRootSelector(state).value5Case || '';
export const getFormInputsValuesValue6Selector = (state) => getFormInputsValuesStoreRootSelector(state).value6Case || '';
export const getFormInputsValuesCitySelector = (state) => getFormInputsValuesStoreRootSelector(state).cityCase || false;
export const getFormInputsValuesSourceSelector = (state) => getFormInputsValuesStoreRootSelector(state).sourceCase || false;
