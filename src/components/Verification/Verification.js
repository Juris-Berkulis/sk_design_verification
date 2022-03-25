import React, { useRef, useState } from 'react';
import { VerificationUI } from '../../ui_components/VerificationUI';
import cities from '../../json/cities.json';
import sources from '../../json/sources.json';
import { Div } from '../../styles_components/DivStyle';
import { Paragraph } from '../../styles_components/ParagraphStyle';

export const Verification = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showAdditionalList, setShowAdditionalList] = useState(false);
    const [showCitiesList, setShowCitiesList] = useState(false);
    const [showSourceList, setShowSourceList] = useState(false);

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [city, setCity] = useState(false);
    const [source, setSource] = useState(false);

    const refInput1 = useRef(null);
    const refInput2 = useRef(null);
    const refInput3 = useRef(null);
    const refInput4 = useRef(null);
    const refInput5 = useRef(null);
    const refInput6 = useRef(null);

    const getSource = (event) => {
        setSource(event.target.outerText);
    };
    
    const getCity = (event) => {
        setCity(event.target.outerText);

        validAll(event.target.outerText, 6);
    };

    const toggleShowCitiesList = () => {
        setShowCitiesList(!showCitiesList);
    };

    const citiesList = cities.map((item, index) => (
        <Div onClick={() => setShowCitiesList(false)} cursor='pointer' key={item.id}>
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

    const toggleShowSourceList = () => {
        setShowSourceList(!showSourceList);
    };

    const sourcesList = sources.map((item, index) => (
        <Div onClick={() => setShowSourceList(false)} cursor='pointer' key={item}>
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
            && 
            (
                city 
                || 
                (
                    number === 6 
                    && 
                    eventTV
                )
            )
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
                
                setCity(false);
                setSource(false);
                resetValue();
                setIsLoading(false);
                clearTimeout(timerId);
            }, 2000);
        }
    };

    const toggleAdditionalList = () => {
        setShowAdditionalList(!showAdditionalList);
    };

    const closeAllDropdowns = () => {
        setShowCitiesList(false);
        setShowSourceList(false);
    };

    return (
        <VerificationUI onSubmitForm={onSubmitForm} onSaveValueFromInput={onSaveValueFromInput} value1={value1} value2={value2} value3={value3} value4={value4} value5={value5} value6={value6} refInput1={refInput1} refInput2={refInput2} refInput3={refInput3} refInput4={refInput4} refInput5={refInput5} refInput6={refInput6} isLoading={isLoading} isSuccess={isSuccess} toggleAdditionalList={toggleAdditionalList} showAdditionalList={showAdditionalList} citiesList={citiesList} toggleShowCitiesList={toggleShowCitiesList} showCitiesList={showCitiesList} city={city} sourcesList={sourcesList} toggleShowSourceList={toggleShowSourceList} showSourceList={showSourceList} source={source} closeAllDropdowns={closeAllDropdowns}></VerificationUI>
    )
};
