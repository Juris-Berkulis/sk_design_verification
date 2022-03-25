import React, { useRef, useState } from 'react';
import { VerificationUI } from '../../ui_components/VerificationUI';

export const Verification = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showAdditionalList, setShowAdditionalList] = useState(false);

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');

    const refInput1 = useRef(null);
    const refInput2 = useRef(null);
    const refInput3 = useRef(null);
    const refInput4 = useRef(null);
    const refInput5 = useRef(null);
    const refInput6 = useRef(null);
    
    const resetValue = () => {
        setIsSuccess(false);

        setValue1('');
        setValue2('');
        setValue3('');
        setValue4('');
        setValue5('');
        setValue6('');
    };

    const validName = (name) => {
        const regExp = /^[A-zА-яЁё]{2,}$/;

        if (regExp.test(name)) {
            return true
        } else {
            return false
        }
    };

    const validPhoneNumber = (phoneNumber) => {
        const regExp = /^\+[0-9]{11}$/;

        if (regExp.test(phoneNumber)) {
            return true
        } else {
            return false
        }
    };

    const validEmail = (email) => {
        const regExp = /^.+@.+\..+$/;

        if (regExp.test(email)) {
            return true
        } else {
            return false
        }
    };

    const validProfile = (profile) => {
        const regExp = /^\S{3,}$/;

        if (regExp.test(profile)) {
            return true
        } else {
            return false
        }
    };

    const validAll = (eventTV, number) => {
        if (
            validName(1 === number ? eventTV : value1) 
            && 
            validPhoneNumber(2 === number ? eventTV : value2) 
            && 
            validEmail(3 === number ? eventTV : value3) 
            && 
            validProfile(4 === number ? eventTV : value4)
        ) {
            setIsSuccess(true);
        } else {
            setIsSuccess(false);
        }
    };

    const onSaveValueFromInput = (event, number) => {
        if (number === 1) {
            setValue1(event.target.value);
        } else if (number === 2) {
            setValue2(event.target.value);
        } else if (number === 3) {
            setValue3(event.target.value);
        } else if (number === 4) {
            setValue4(event.target.value);
        } else if (number === 5) {
            setValue5(event.target.value);
        } else if (number === 6) {
            setValue6(event.target.value);
        }

        validAll(event.target.value, number);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (isSuccess) {
            setIsLoading(true);

            const timerId = setTimeout(() => {
                const newRequest = {
                    name: value1,
                    phoneNumber: value2,
                    email: value3,
                    profile: value4,
                    organization: value5,
                    fio: value6
                }
    
                console.log(JSON.stringify(newRequest));
    
                resetValue();
                setIsLoading(false);
                clearTimeout(timerId);
            }, 2000);
        }
    };

    const toggleAdditionalList = () => {
        setShowAdditionalList(!showAdditionalList);
    };

    return (
        <VerificationUI onSubmitForm={onSubmitForm} onSaveValueFromInput={onSaveValueFromInput} value1={value1} value2={value2} value3={value3} value4={value4} value5={value5} value6={value6} refInput1={refInput1} refInput2={refInput2} refInput3={refInput3} refInput4={refInput4} refInput5={refInput5} refInput6={refInput6} isLoading={isLoading} isSuccess={isSuccess} toggleAdditionalList={toggleAdditionalList} showAdditionalList={showAdditionalList}></VerificationUI>
    )
};
