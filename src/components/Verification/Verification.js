import React, { useRef } from 'react';
import { VerificationUI } from '../../ui_components/VerificationUI';
import cities from '../../json/cities.json';
import sources from '../../json/sources.json';
import { Div } from '../../styles_components/DivStyle';
import { Paragraph } from '../../styles_components/ParagraphStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getFormStatusesIsFormLoadingSelector, getFormStatusesIsFormSuccessSelector, getFormStatusesShowAdditionalListSelector, getFormStatusesShowCitiesListCaseSelector, getFormStatusesShowSourceListCaseSelector } from '../../store/AppSwitches/Selectors';
import { isFormLoadingAction, isFormSuccessAction, showAdditionalListAction, showCitiesListAction, showSourceListAction } from '../../store/AppSwitches/Action';
import { getFormErrorsErrorCityCaseSelector, getFormErrorsErrorInput1CaseSelector, getFormErrorsErrorInput2CaseSelector, getFormErrorsErrorInput3CaseSelector, getFormErrorsErrorInput4CaseSelector } from '../../store/FormErrors/Selectors';
import { errorCityAction, errorInput1Action, errorInput2Action, errorInput3Action, errorInput4Action } from '../../store/FormErrors/Action';
import { getFormInputsValuesCitySelector, getFormInputsValuesSourceSelector, getFormInputsValuesValue1Selector, getFormInputsValuesValue2Selector, getFormInputsValuesValue3Selector, getFormInputsValuesValue4Selector, getFormInputsValuesValue5Selector, getFormInputsValuesValue6Selector } from '../../store/FormInputsValues/Selectors';
import { cityAction, sourceAction, value1Action, value2Action, value3Action, value4Action, value5Action, value6Action } from '../../store/FormInputsValues/Action';

export const Verification = () => {
    // const [isLoading, setIsLoading] = useState(false);
    // const [isSuccess, setIsSuccess] = useState(false);
    // const [showAdditionalList, setShowAdditionalList] = useState(false);
    // const [showCitiesList, setShowCitiesList] = useState(false);
    // const [showSourceList, setShowSourceList] = useState(false);

    const dispatch = useDispatch();

    const isLoading = useSelector(getFormStatusesIsFormLoadingSelector);
    const isSuccess = useSelector(getFormStatusesIsFormSuccessSelector);
    const showAdditionalList = useSelector(getFormStatusesShowAdditionalListSelector);
    const showCitiesList = useSelector(getFormStatusesShowCitiesListCaseSelector);
    const showSourceList = useSelector(getFormStatusesShowSourceListCaseSelector);

    // const [value1, setValue1] = useState('');
    // const [value2, setValue2] = useState('');
    // const [value3, setValue3] = useState('');
    // const [value4, setValue4] = useState('');
    // const [value5, setValue5] = useState('');
    // const [value6, setValue6] = useState('');
    // const [city, setCity] = useState(false);
    // const [source, setSource] = useState(false);

    const value1 = useSelector(getFormInputsValuesValue1Selector);
    const value2 = useSelector(getFormInputsValuesValue2Selector);
    const value3 = useSelector(getFormInputsValuesValue3Selector);
    const value4 = useSelector(getFormInputsValuesValue4Selector);
    const value5 = useSelector(getFormInputsValuesValue5Selector);
    const value6 = useSelector(getFormInputsValuesValue6Selector);
    const city = useSelector(getFormInputsValuesCitySelector);
    const source = useSelector(getFormInputsValuesSourceSelector);

    // const [errorInput1, setErrorInput1] = useState(false);
    // const [errorInput2, setErrorInput2] = useState(false);
    // const [errorInput3, setErrorInput3] = useState(false);
    // const [errorInput4, setErrorInput4] = useState(false);
    // const [errorCity, setErrorCity] = useState(false);

    const errorInput1 = useSelector(getFormErrorsErrorInput1CaseSelector);
    const errorInput2 = useSelector(getFormErrorsErrorInput2CaseSelector);
    const errorInput3 = useSelector(getFormErrorsErrorInput3CaseSelector);
    const errorInput4 = useSelector(getFormErrorsErrorInput4CaseSelector);
    const errorCity = useSelector(getFormErrorsErrorCityCaseSelector);

    const refInput1 = useRef(null);
    const refInput2 = useRef(null);
    const refInput3 = useRef(null);
    const refInput4 = useRef(null);
    const refInput5 = useRef(null);
    const refInput6 = useRef(null);

    const getSource = (event) => {
        // setSource(event.target.outerText);
        dispatch({
            type: sourceAction.type,
            payload: event.target.outerText,
        });
    };
    
    const getCity = (event) => {
        // setCity(event.target.outerText);
        dispatch({
            type: cityAction.type,
            payload: event.target.outerText,
        });

        validAll(event.target.outerText, 6);
    };

    const turnOffShowCitiesList = () => {
        dispatch({
            type: showCitiesListAction.type,
            payload: false,
        });
    };

    const toggleShowCitiesList = () => {
        // setShowCitiesList(!showCitiesList);
        dispatch({
            type: showCitiesListAction.type,
            payload: !showCitiesList,
        });
    };

    const citiesList = cities.map((item, index) => (
        <Div onClick={() => turnOffShowCitiesList()} cursor='pointer' key={item.id}>
            <Div onClick={getCity} height='30px' padding='5px 15px' color='#353238' backgroundColorHover='#0086A8' colorHover='#ffffff' value={item.name}>
                <Paragraph lineHeight='20px' colorHover={true}>{item.name}</Paragraph>
            </Div>
            {
                index === cities.length - 1
                ? 
                null
                :
                <Div height='2px' backgroundColor='#E3E3E3'></Div>
            }
        </Div>
    ));

    const turnOffShowSourceList = () => {
        dispatch({
            type: showSourceListAction.type,
            payload: false,
        });
    };

    const toggleShowSourceList = () => {
        // setShowSourceList(!showSourceList);
        dispatch({
            type: showSourceListAction.type,
            payload: !showSourceList,
        });
    };

    const sourcesList = sources.map((item, index) => (
        <Div onClick={() => turnOffShowSourceList()} cursor='pointer' key={item}>
            <Div onClick={getSource} height='30px' padding='5px 15px' color='#353238' backgroundColorHover='#0086A8' colorHover='#ffffff' value={item}>
                <Paragraph lineHeight='20px' colorHover={true}>{item}</Paragraph>
            </Div>
            {
                index === sources.length - 1
                ? 
                null
                :
                <Div height='2px' backgroundColor='#E3E3E3'></Div>
            }
        </Div>
    ));
    
    const resetValue = () => {
        // setIsSuccess(false);
        dispatch({
            type: isFormSuccessAction.type,
            payload: false,
        });

        // setValue1('');
        dispatch({
            type: value1Action.type,
            payload: '',
        });
        // setValue2('');
        dispatch({
            type: value2Action.type,
            payload: '',
        });
        // setValue3('');
        dispatch({
            type: value3Action.type,
            payload: '',
        });
        // setValue4('');
        dispatch({
            type: value4Action.type,
            payload: '',
        });
        // setValue5('');
        dispatch({
            type: value5Action.type,
            payload: '',
        });
        // setValue6('');
        dispatch({
            type: value6Action.type,
            payload: '',
        });
    };

    const validName = (name, number=1) => {
        const regExp = /^[A-zА-яЁё]{2,}$/;

        if (regExp.test(name)) {
            // setErrorInput1(false);
            dispatch({
                type: errorInput1Action.type,
                payload: false,
            });

            return true
        } else {
            if (number === 1) {
                if (name === '') {
                    // setErrorInput1('Обязательное поле');
                    dispatch({
                        type: errorInput1Action.type,
                        payload: 'Обязательное поле',
                    });
                } else {
                    // setErrorInput1('Минимум 2 символа');
                    dispatch({
                        type: errorInput1Action.type,
                        payload: 'Минимум 2 символа',
                    });
                }
            }
            return false
        }
    };

    const validPhoneNumber = (phoneNumber, number=2) => {
        const regExp = /^\+[0-9]{11}$/;

        if (regExp.test(phoneNumber)) {
            // setErrorInput2(false);
            dispatch({
                type: errorInput2Action.type,
                payload: false,
            });
            return true
        } else {
            if (number === 2) {
                if (phoneNumber === '') {
                    // setErrorInput2('Обязательное поле');
                    dispatch({
                        type: errorInput2Action.type,
                        payload: 'Обязательное поле',
                    });
                } else {
                    // setErrorInput2('Неверный формат');
                    dispatch({
                        type: errorInput2Action.type,
                        payload: 'Неверный формат',
                    });
                }
            }
            return false
        }
    };

    const validEmail = (email, number=3) => {
        const regExp = /^.+@.+\..+$/;

        if (regExp.test(email)) {
            // setErrorInput3(false);
            dispatch({
                type: errorInput3Action.type,
                payload: false,
            });
            return true
        } else {
            if (number === 3) {
                if (email === '') {
                    // setErrorInput3('Обязательное поле');
                    dispatch({
                        type: errorInput3Action.type,
                        payload: 'Обязательное поле',
                    });
                } else {
                    // setErrorInput3('Неверный формат');
                    dispatch({
                        type: errorInput3Action.type,
                        payload: 'Неверный формат',
                    });
                }
            }
            return false
        }
    };

    const validProfile = (profile, number=4) => {
        const regExp = /^\S{3,}$/;

        if (regExp.test(profile)) {
            // setErrorInput4(false);
            dispatch({
                type: errorInput4Action.type,
                payload: false,
            });
            return true
        } else {
            if (number === 4) {
                if (profile === '') {
                    // setErrorInput4('Обязательное поле');
                    dispatch({
                        type: errorInput4Action.type,
                        payload: 'Обязательное поле',
                    });
                } else {
                    // setErrorInput4('Минимум 3 символа');
                    dispatch({
                        type: errorInput4Action.type,
                        payload: 'Минимум 3 символа',
                    });
                }
            }
            return false
        }
    };

    const validCity = (newCity=city, number=6) => {
        if (newCity) {
            // setErrorCity(false);
            dispatch({
                type: errorCityAction.type,
                payload: false,
            });
            return true
        } else {
            if (number === 6) {
                // setErrorCity('Обязательное поле');
                dispatch({
                    type: errorCityAction.type,
                    payload: 'Обязательное поле',
                });
            }
            return false
        }
    };

    const validAll = (eventTV, number) => {
        const isValidName = validName(1 === number ? eventTV : value1, number);
        const isValidPhoneNumber = validPhoneNumber(2 === number ? eventTV : value2, number);
        const isValidEmail = validEmail(3 === number ? eventTV : value3, number);
        const isValidProfile = validProfile(4 === number ? eventTV : value4, number);
        const isValidCity = validCity(6 === number ? eventTV : city, number);

        if (
            isValidName 
            && 
            isValidPhoneNumber 
            && 
            isValidEmail 
            && 
            isValidProfile 
            && 
            isValidCity
        ) {
            // setIsSuccess(true);
            dispatch({
                type: isFormSuccessAction.type,
                payload: true,
            });
        } else {
            // setIsSuccess(false);
            dispatch({
                type: isFormSuccessAction.type,
                payload: false,
            });
        }
    };

    const onSaveValueFromInput = (event, number) => {
        if (number === 1) {
            // setValue1(event.target.value);
            dispatch({
                type: value1Action.type,
                payload: event.target.value,
            });
        } else if (number === 2) {
            // setValue2(event.target.value);
            dispatch({
                type: value2Action.type,
                payload: event.target.value,
            });
        } else if (number === 3) {
            // setValue3(event.target.value);
            dispatch({
                type: value3Action.type,
                payload: event.target.value,
            });
        } else if (number === 4) {
            // setValue4(event.target.value);
            dispatch({
                type: value4Action.type,
                payload: event.target.value,
            });
        } else if (number === 5) {
            // setValue5(event.target.value);
            dispatch({
                type: value5Action.type,
                payload: event.target.value,
            });
        } else if (number === 6) {
            // setValue6(event.target.value);
            dispatch({
                type: value6Action.type,
                payload: event.target.value,
            });
        }

        validAll(event.target.value, number);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (isSuccess) {
            // setIsLoading(true);
            dispatch({
                type: isFormLoadingAction.type,
                payload: true,
            });

            closeAllDropdowns();

            const timerId = setTimeout(() => {
                const newRequest = {
                    name: value1,
                    phoneNumber: value2,
                    email: value3,
                    profile: value4,
                    organization: value5,
                    fio: value6,
                    city: city,
                    source: source
                }
    
                console.log(JSON.stringify(newRequest));
                
                // setCity(false);
                dispatch({
                    type: cityAction.type,
                    payload: false,
                });

                // setSource(false);
                dispatch({
                    type: sourceAction.type,
                    payload: false,
                });

                resetValue();
                // setIsLoading(false);
                dispatch({
                    type: isFormLoadingAction.type,
                    payload: false,
                });

                clearTimeout(timerId);
            }, 2000);
        }
    };

    const toggleAdditionalList = () => {
        // setShowAdditionalList(!showAdditionalList);
        dispatch({
            type: showAdditionalListAction.type,
            payload: !showAdditionalList,
        });
    };

    const closeAllDropdowns = () => {
        // setShowCitiesList(false);
        turnOffShowCitiesList();

        // setShowSourceList(false);
        turnOffShowSourceList();
    };

    return (
        <VerificationUI onSubmitForm={onSubmitForm} onSaveValueFromInput={onSaveValueFromInput} value1={value1} value2={value2} value3={value3} value4={value4} value5={value5} value6={value6} refInput1={refInput1} refInput2={refInput2} refInput3={refInput3} refInput4={refInput4} refInput5={refInput5} refInput6={refInput6} isLoading={isLoading} isSuccess={isSuccess} toggleAdditionalList={toggleAdditionalList} showAdditionalList={showAdditionalList} citiesList={citiesList} toggleShowCitiesList={toggleShowCitiesList} showCitiesList={showCitiesList} city={city} sourcesList={sourcesList} toggleShowSourceList={toggleShowSourceList} showSourceList={showSourceList} source={source} closeAllDropdowns={closeAllDropdowns} errorInput1={errorInput1} errorInput2={errorInput2} errorInput3={errorInput3} errorInput4={errorInput4} errorCity={errorCity} validAll={validAll} validCity={validCity}></VerificationUI>
    )
};
