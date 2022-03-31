import React from 'react';
import { ButtonLoading } from '../styles_components/ButtonLoadingStyle';
import { Button } from '../styles_components/ButtonStyle';
import { ButtonSuccess } from '../styles_components/ButtonSuccessStyle';
import { Div } from '../styles_components/DivStyle';
import { Flex } from '../styles_components/FlexStyle';
import { Form } from '../styles_components/FormStyle';
import { InputStyle } from '../styles_components/InputStyle';
import { InputWrapperStyle } from '../styles_components/InputWrapperStyle';
import { LabelStyle } from '../styles_components/LabelStyle';
import { LogoLetter } from '../styles_components/LogoLetterStyle';
import { LogoLetterSVG } from '../styles_components/LogoLetterSVGStyle';
import { PageFlex } from '../styles_components/PageFlexStyle';
import { Paragraph } from '../styles_components/ParagraphStyle';
import { PreloaderImg } from '../styles_components/PreloaderImgStyle';
import { Title } from '../styles_components/TitleStyle';
import preloader from '../img/preloader.png';
import { Span } from '../styles_components/SpanStyle';
import { ImgSVG } from '../styles_components/ImgSVGStyle';
import { ParagraphError } from '../styles_components/ParagraphErrorStyle';
import { ArrowImgSVG } from '../styles_components/ArrowSVGStyle';
import { LogoLetterDiv } from '../styles_components/LogoLetterDivStyle';
import { LogoLetterDivSVG } from '../styles_components/LogoLetterDivSVGStyle';
import { ParagraphLabel } from '../styles_components/ParagraphLabelStyle';

export const VerificationUI = (props) => {
    return (
        <Flex justifyContent='center' alignItems='center' minHeight='100vh' width='100vw'>
            {
                (
                    props.showCitiesList 
                    || 
                    props.showSourceList 
                ) 
                ? 
                <Div onClick={props.closeAllDropdowns} position='fixed' top='0' left='0' height='100vh' width='100vw' backgroundColor='transparent' zIndex='6'></Div>
                : 
                null
            }
            <PageFlex justifyContent='space-between' alignItems='center' maxWidth='1600px'>
                <Flex flexDirection='column' maxWidth='950px' margin='2vh 2vw' pageColumn>
                    <Flex margin='0 0 40px'>
                        <LogoLetter marginRight='9px'>
                            <LogoLetterSVG width="50" height="70" viewBox='0 0 50 70' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.03677 54.5995C3.53753 55.8859 5.25268 57.0651 7.50383 58.1371C9.64779 59.209 12.0061 59.9594 14.5789 60.6026C17.5804 61.2458 20.2604 61.5674 22.8331 61.5674C26.049 61.5674 29.0506 61.1386 31.7305 60.1738C34.4104 59.3162 36.4472 58.0299 38.0552 56.3147C39.6631 54.4923 40.4135 52.5628 40.4135 50.3116C40.4135 47.5245 39.1271 45.2733 36.5544 43.5582C33.9817 41.843 29.801 40.5566 24.2267 39.5919L18.8668 38.6271C12.6493 37.5551 7.93264 35.4112 4.71671 32.4096C1.60797 29.4081 0 25.549 0 20.7251C0 16.7588 1.07198 13.3284 3.32313 10.2197C5.46709 7.11098 8.68301 4.75262 12.6493 3.03746C16.6156 1.3223 21.1179 0.464722 26.1562 0.464722H27.7642C34.0889 0.679117 39.8775 2.07268 45.2374 4.64542L44.9158 13.8644C38.9128 10.3269 32.8025 8.50455 26.3706 8.50455C23.1547 8.50455 20.3676 8.93334 17.7948 9.89812C15.2221 10.7557 13.1853 12.1493 11.6846 13.7572C10.0766 15.5796 9.32619 17.6164 9.32619 19.8675C9.32619 22.6546 10.5054 24.9058 12.8637 26.6209C15.2221 28.3361 19.0812 29.6225 24.4411 30.5873L29.1578 31.3376C36.1256 32.5168 41.2711 34.5536 44.7014 37.5551C48.1317 40.5566 49.8469 44.4158 49.8469 49.2397C49.8469 53.206 48.7749 56.6363 46.5238 59.745C44.2726 62.8538 41.0567 65.2121 36.9832 66.9273C32.9097 68.6424 28.3002 69.5 23.1547 69.5H21.7611C18.2236 69.3928 14.6861 68.8568 11.1486 67.892C7.61104 66.9273 4.28791 65.6409 1.39357 64.0329L2.03677 54.5995Z" fill="#353238"/>
                            </LogoLetterSVG>
                        </LogoLetter>
                        <LogoLetter marginRight='24px'>
                            <LogoLetterSVG width="53" height="70" viewBox="0 0 53 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M52.6999 69.9641L19.683 33.7313L49.8056 2.00076H43.4809C40.4794 2.00076 37.585 3.28713 35.5483 5.43108L8.96327 34.0529V0.5L0.280258 3.82312V69.9641H8.96327V44.8798L13.7872 39.9487L37.6922 66.4266C39.729 68.6777 42.5161 69.8569 45.5177 69.8569H52.6999V69.9641Z" fill="#353238"/>
                            </LogoLetterSVG>
                        </LogoLetter>
                        <LogoLetterDiv position='relative' height='67' width='62' margin='0 13px 0 0'>
                            <LogoLetterDivSVG style={{position: 'absolute', top: '0', left: '0'}} width="82%" height="94%" viewBox="0 0 51 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.93119 47.275V8.68386H28.87C35.409 8.68386 40.6617 10.2918 44.628 13.2933L50.5239 6.86149C49.3447 6.0039 48.1655 5.25352 46.8791 4.50314C41.8409 1.8232 35.8378 0.429626 28.87 0.429626H0.141006V62.2827L5.39368 56.494C7.64483 54.0285 8.93119 50.7053 8.93119 47.275Z" fill="#0086A8"/>
                            </LogoLetterDivSVG>
                            <LogoLetterDivSVG style={{position: 'absolute', right: '0', bottom: '0'}} width="92%" height="82%" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.527 0.186157L44.2023 7.154C46.0247 10.9059 46.9895 15.6226 46.9895 21.0897C46.9895 29.3439 44.8455 35.5614 40.6648 39.9565C36.4841 44.3516 30.481 46.6027 22.7628 46.6027H13.5438C10.2207 46.6027 7.00477 47.9963 4.75362 50.4618L0.787292 54.7498H22.6556C29.6235 54.7498 35.6265 53.3562 40.772 50.569C45.8103 47.7819 49.5622 43.9228 52.2422 38.7773C54.9221 33.739 56.2085 27.7359 56.2085 20.9825C56.2085 14.1218 54.9221 8.22598 52.2422 3.18769C51.8134 2.22292 51.1702 1.15094 50.527 0.186157Z" fill="#353238"/>
                            </LogoLetterDivSVG>
                        </LogoLetterDiv>
                        <LogoLetter marginRight='6px'>
                            <LogoLetterSVG width="48" height="68" viewBox="0 0 48 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.54077 59.7099H47.3815L44.0584 67.857H0.750549V0.429626H46.7384L43.4152 8.57665H9.54077V29.909H38.4841L35.161 38.056H9.54077V59.7099Z" fill="#353238"/>
                            </LogoLetterSVG>
                        </LogoLetter>
                        <LogoLetter marginRight='11px'>
                            <LogoLetterSVG width="50" height="70" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.03677 54.5995C3.53753 55.8859 5.25268 57.0651 7.50383 58.1371C9.64779 59.209 12.0061 59.9594 14.5789 60.6026C17.5804 61.2458 20.2604 61.5674 22.8331 61.5674C26.049 61.5674 29.0506 61.1386 31.7305 60.1738C34.4104 59.3162 36.4472 58.0299 38.0552 56.3147C39.6631 54.4923 40.4135 52.5628 40.4135 50.3116C40.4135 47.5245 39.1271 45.2733 36.5544 43.5582C33.9817 41.843 29.801 40.5566 24.2267 39.5919L18.8668 38.6271C12.6493 37.5551 7.93264 35.4112 4.71671 32.4096C1.60797 29.4081 0 25.549 0 20.7251C0 16.7588 1.07198 13.3284 3.32313 10.2197C5.46709 7.11098 8.68301 4.75262 12.6493 3.03746C16.6156 1.3223 21.1179 0.464722 26.1562 0.464722H27.7642C34.0889 0.679117 39.8775 2.07268 45.2374 4.64542L44.9158 13.8644C38.9128 10.3269 32.8025 8.50455 26.3706 8.50455C23.1547 8.50455 20.3676 8.93334 17.7948 9.89812C15.2221 10.7557 13.1853 12.1493 11.6846 13.7572C10.0766 15.5796 9.32619 17.6164 9.32619 19.8675C9.32619 22.6546 10.5054 24.9058 12.8637 26.6209C15.2221 28.3361 19.0812 29.6225 24.4411 30.5873L29.1578 31.3376C36.1256 32.5168 41.2711 34.5536 44.7014 37.5551C48.1317 40.5566 49.8469 44.4158 49.8469 49.2397C49.8469 53.206 48.7749 56.6363 46.5238 59.745C44.2726 62.8538 41.0567 65.2121 36.9832 66.9273C32.9097 68.6424 28.3002 69.5 23.1547 69.5H21.7611C18.2236 69.3928 14.6861 68.8568 11.1486 67.892C7.61104 66.9273 4.28791 65.6409 1.39357 64.0329L2.03677 54.5995Z" fill="#353238"/>
                            </LogoLetterSVG>
                        </LogoLetter>
                        <LogoLetter marginRight='10px'>
                            <LogoLetterSVG width="10" height="69" viewBox="0 0 10 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.916107 3.96704L9.59912 0.643921V68.0712H0.916107V3.96704Z" fill="#353238"/>
                            </LogoLetterSVG>
                        </LogoLetter>
                        <LogoLetter marginRight='8px'>
                            <LogoLetterSVG width="66" height="68" viewBox="0 0 66 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M52.881 15.9732C50.5226 13.5076 47.8427 11.6853 44.7339 10.3989C41.6252 9.11252 38.3021 8.46934 34.8718 8.46934C30.1551 8.46934 25.8672 9.54132 22.008 11.7925C18.1489 14.0436 15.0402 17.1524 12.789 21.2259C10.5379 25.1922 9.4659 29.5873 9.4659 34.5184C9.4659 39.3423 10.5379 43.6302 12.5746 47.5965C14.6114 51.4556 17.6129 54.5643 21.3648 56.8155C25.224 59.0666 29.4047 60.1386 33.907 60.1386C40.446 60.1386 45.5915 58.4234 49.5578 54.9931C53.4169 51.5628 55.7753 46.7389 56.4185 40.307H30.3694L34.3358 36.0191C36.3725 33.8752 39.1596 32.5888 42.054 32.5888H65.5303V33.9824C65.5303 40.4142 64.2439 46.0957 61.6712 51.2412C59.0984 56.3867 55.4537 60.353 50.737 63.3545C46.0203 66.3561 40.3388 67.8568 33.7998 67.8568C27.7967 67.8568 22.3296 66.4633 17.2913 63.7833C12.253 60.9962 8.17953 57.2443 5.17799 52.4204C2.06926 47.3821 0.461304 41.379 0.461304 34.5184C0.461304 28.1937 1.96208 22.405 4.85641 17.2596C7.75075 12.1141 11.9314 7.93335 17.2913 5.03901C22.6512 2.03748 28.4399 0.643921 34.8718 0.643921C39.6957 0.643921 44.1979 1.50149 48.3786 3.10945C52.3449 4.71742 55.7753 6.96857 58.7768 9.86291L52.881 15.9732Z" fill="#353238"/>
                            </LogoLetterSVG>
                        </LogoLetter>
                        <LogoLetter>
                            <LogoLetterSVG width="59" height="68" viewBox="0 0 59 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M49.6665 4.18152L58.4568 0.8584V67.9641H50.0954L9.25308 15.0085V67.9641H0.46286V0.536804H8.82426L49.6665 53.4924V4.18152Z" fill="#353238"/>
                            </LogoLetterSVG>
                        </LogoLetter>
                    </Flex>
                    <Title margin='0 0 40px'>Оставьте заявку и станьте частью нашей команды</Title>
                    <Paragraph margin='0 0 22px'>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.</Paragraph>
                    <Paragraph margin='0 0 22px'>Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.</Paragraph>
                    <Paragraph>Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.</Paragraph>
                </Flex>
                <Form onSubmit={props.onSubmitForm} margin='2vh 2vw' padding='40px 30px'>
                    <InputWrapperStyle width='47%' isError={props.errorInput1 ? true : false}>
                        <LabelStyle htmlFor='1'>Ваше имя *</LabelStyle>
                        <InputStyle inputRef={props.refInput1} onFocus={props.closeAllDropdowns} id='1' placeholder='Иван' onChange={(event) => props.onSaveValueFromInput(event, 1)} value={props.value1} isError={props.errorInput1 ? true : false}></InputStyle>
                        {
                            props.errorInput1 
                            ? 
                            <ParagraphError position='absolute' top='58px' left='15px' color='#EB5E55' fontSize='12px' lineHeight='100%'>{props.errorInput1}</ParagraphError>
                            : 
                            null
                        }
                    </InputWrapperStyle>
                    <InputWrapperStyle width='47%' isError={props.errorInput2 ? true : false}>
                        <LabelStyle htmlFor='2'>Номер телефона *</LabelStyle>
                        <InputStyle inputRef={props.refInput2} onFocus={props.closeAllDropdowns} id='2' placeholder='+7 (000) 000-00-00' onChange={(event) => props.onSaveValueFromInput(event, 2)} value={props.value2} isError={props.errorInput2 ? true : false}></InputStyle>
                        {
                            props.errorInput2 
                            ? 
                            <ParagraphError position='absolute' top='58px' left='15px' color='#EB5E55' fontSize='12px' lineHeight='100%'>{props.errorInput2}</ParagraphError>
                            : 
                            null
                        }
                    </InputWrapperStyle>
                    <InputWrapperStyle width='47%' isError={props.errorInput3 ? true : false}>
                        <LabelStyle htmlFor='3'>E-mail *</LabelStyle>
                        <InputStyle inputRef={props.refInput3} onFocus={props.closeAllDropdowns} id='3' placeholder='example@skdesign.ru' onChange={(event) => props.onSaveValueFromInput(event, 3)} value={props.value3} isError={props.errorInput3 ? true : false}></InputStyle>
                        {
                            props.errorInput3 
                            ? 
                            <ParagraphError position='absolute' top='58px' left='15px' color='#EB5E55' fontSize='12px' lineHeight='100%'>{props.errorInput3}</ParagraphError>
                            : 
                            null
                        }
                    </InputWrapperStyle>
                    <InputWrapperStyle width='47%' isError={props.errorInput4 ? true : false}>
                        <LabelStyle htmlFor='4'>Ссылка на профиль *</LabelStyle>
                        <InputStyle inputRef={props.refInput4} onFocus={props.closeAllDropdowns} id='4' placeholder='instagram.com/skde…' onChange={(event) => props.onSaveValueFromInput(event, 4)} value={props.value4} isError={props.errorInput4 ? true : false}></InputStyle>
                        {
                            props.errorInput4 
                            ? 
                            <ParagraphError position='absolute' top='58px' left='15px' color='#EB5E55' fontSize='12px' lineHeight='100%'>{props.errorInput4}</ParagraphError>
                            : 
                            null
                        }
                    </InputWrapperStyle>
                    <Div position='relative' height='50px' margin='0 0 20px' zIndex='7'>
                        <Div onClick={() => {props.toggleShowCitiesList(); props.validCity()}} position='relative' height='50px' border={props.showCitiesList ? '2px solid #0086A8' : (props.errorCity ? '2px solid #EB5E55' : '2px solid #E3E3E3')} borderRadius='8px' padding='18px 30px 18px 15px' cursor='pointer'>
                            {
                                (
                                    props.showCitiesList 
                                    || 
                                    props.city
                                )
                                ? 
                                <ParagraphLabel style={{position: 'absolute', top: '-5px', left: '10px'}} color={props.showCitiesList ? '#0086A8' : '#828282'} padding='0 5px' fontSize='12px' lineHeight='100%' backgroundColor='#ffffff'>Выберите город *</ParagraphLabel>
                                : 
                                null
                            }
                            <Paragraph lineHeight='100%' color={props.showCitiesList ? '#0086A8' : (props.errorCity ? '#EB5E55' : '#353238')}>
                                {
                                    props.city 
                                    ? 
                                    props.city 
                                    : 
                                    'Выберите город *'
                                }
                            </Paragraph>
                            {
                                props.showCitiesList 
                                ? 
                                <ArrowImgSVG style={{transform: 'rotateZ(180deg)'}} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.27439 5.5864L9.88692 0.96111C10.038 0.809567 10.0377 0.564217 9.88613 0.412928C9.73459 0.261757 9.4891 0.262148 9.33795 0.41371L4.99995 4.76369L0.661973 0.413553C0.510801 0.262011 0.265468 0.26162 0.113905 0.412772C0.0379282 0.488612 -6.10352e-05 0.587967 -6.10352e-05 0.687322C-6.10352e-05 0.786423 0.0376735 0.885387 0.113123 0.96109L4.72554 5.5864C4.79815 5.65939 4.89698 5.70035 4.99995 5.70035C5.10292 5.70035 5.20163 5.65927 5.27439 5.5864Z" fill="#353238"/>
                                </ArrowImgSVG>
                                : 
                                <ArrowImgSVG width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.27439 5.5864L9.88692 0.96111C10.038 0.809567 10.0377 0.564217 9.88613 0.412928C9.73459 0.261757 9.4891 0.262148 9.33795 0.41371L4.99995 4.76369L0.661973 0.413553C0.510801 0.262011 0.265468 0.26162 0.113905 0.412772C0.0379282 0.488612 -6.10352e-05 0.587967 -6.10352e-05 0.687322C-6.10352e-05 0.786423 0.0376735 0.885387 0.113123 0.96109L4.72554 5.5864C4.79815 5.65939 4.89698 5.70035 4.99995 5.70035C5.10292 5.70035 5.20163 5.65927 5.27439 5.5864Z" fill="#353238"/>
                                </ArrowImgSVG>
                            }
                        </Div>
                        {
                            props.showCitiesList 
                            ? 
                            <Div position='relative' zIndex='9'>
                                <Div position='absolute' top='0' left='0' backgroundColor='#ffffff' border='2px solid #E3E3E3' borderRadius='8px' boxShadow='0px 5px 20px rgba(53, 50, 56, 0.14)' overflow='hidden'>
                                    {props.citiesList}
                                </Div>
                            </Div>
                            : 
                            null
                        }
                        {
                            props.errorCity 
                            ? 
                            <ParagraphError position='absolute' top='58px' left='15px' color='#EB5E55' fontSize='12px' lineHeight='100%'>{props.errorCity}</ParagraphError>
                            : 
                            null
                        }
                    </Div>
                    <InputWrapperStyle>
                        <LabelStyle htmlFor='5'>Название организации/студии</LabelStyle>
                        <InputStyle inputRef={props.refInput5} onFocus={props.closeAllDropdowns} id='5' placeholder='SK Design' onChange={(event) => props.onSaveValueFromInput(event, 5)} value={props.value5}></InputStyle>
                    </InputWrapperStyle>
                    <Paragraph margin='0 0 20px' cursor='pointer' zIndex='6' onClick={props.toggleAdditionalList}>
                        {
                            props.showAdditionalList 
                            ? 
                            <>
                                <Span>Скрыть дополнительные поля </Span>
                                <ImgSVG style={{transform: 'rotateZ(180deg)'}} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.27439 5.5864L9.88692 0.96111C10.038 0.809567 10.0377 0.564217 9.88613 0.412928C9.73459 0.261757 9.4891 0.262148 9.33795 0.41371L4.99995 4.76369L0.661973 0.413553C0.510801 0.262011 0.265468 0.26162 0.113905 0.412772C0.0379282 0.488612 -6.10352e-05 0.587967 -6.10352e-05 0.687322C-6.10352e-05 0.786423 0.0376735 0.885387 0.113123 0.96109L4.72554 5.5864C4.79815 5.65939 4.89698 5.70035 4.99995 5.70035C5.10292 5.70035 5.20163 5.65927 5.27439 5.5864Z" fill="#353238"/>
                                </ImgSVG>
                            </> 
                            : 
                            <>
                                <Span>Показать дополнительные поля </Span>
                                <ImgSVG width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.27439 5.5864L9.88692 0.96111C10.038 0.809567 10.0377 0.564217 9.88613 0.412928C9.73459 0.261757 9.4891 0.262148 9.33795 0.41371L4.99995 4.76369L0.661973 0.413553C0.510801 0.262011 0.265468 0.26162 0.113905 0.412772C0.0379282 0.488612 -6.10352e-05 0.587967 -6.10352e-05 0.687322C-6.10352e-05 0.786423 0.0376735 0.885387 0.113123 0.96109L4.72554 5.5864C4.79815 5.65939 4.89698 5.70035 4.99995 5.70035C5.10292 5.70035 5.20163 5.65927 5.27439 5.5864Z" fill="#353238"/>
                                </ImgSVG>
                            </>
                        }
                    </Paragraph>
                    {
                        props.showAdditionalList 
                        ? 
                        <>
                            <InputWrapperStyle width='100%'>
                                <LabelStyle htmlFor='6'>Получатель</LabelStyle>
                                <InputStyle inputRef={props.refInput6} onFocus={props.closeAllDropdowns} id='6' placeholder='ФИО' onChange={(event) => props.onSaveValueFromInput(event, 6)} value={props.value6}></InputStyle>
                            </InputWrapperStyle>
                            <Div height='50px' margin='0 0 20px' zIndex='7'>
                                <Div onClick={props.toggleShowSourceList} position='relative' height='50px' border={props.showSourceList ? '2px solid #0086A8' : '2px solid #E3E3E3'} borderRadius='8px' padding='18px 30px 18px 15px' cursor='pointer'>
                                    {
                                        (
                                            props.showSourceList 
                                            || 
                                            props.source
                                        )
                                        ? 
                                        <ParagraphLabel style={{position: 'absolute', top: '-5px', left: '10px'}} color={props.showSourceList ? '#0086A8' : '#828282'} padding='0 5px' fontSize='12px' lineHeight='100%' backgroundColor='#ffffff'>Откуда узнали про нас?</ParagraphLabel>
                                        : 
                                        null
                                    }
                                    <Paragraph lineHeight='100%' color={props.showSourceList ? '#0086A8' : '#353238'}>
                                        {
                                            props.source 
                                            ? 
                                            props.source 
                                            : 
                                            'Откуда узнали про нас?'
                                        }
                                    </Paragraph>
                                    {
                                        props.showSourceList 
                                        ? 
                                        <ArrowImgSVG style={{transform: 'rotateZ(180deg)'}} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.27439 5.5864L9.88692 0.96111C10.038 0.809567 10.0377 0.564217 9.88613 0.412928C9.73459 0.261757 9.4891 0.262148 9.33795 0.41371L4.99995 4.76369L0.661973 0.413553C0.510801 0.262011 0.265468 0.26162 0.113905 0.412772C0.0379282 0.488612 -6.10352e-05 0.587967 -6.10352e-05 0.687322C-6.10352e-05 0.786423 0.0376735 0.885387 0.113123 0.96109L4.72554 5.5864C4.79815 5.65939 4.89698 5.70035 4.99995 5.70035C5.10292 5.70035 5.20163 5.65927 5.27439 5.5864Z" fill="#353238"/>
                                        </ArrowImgSVG>
                                        : 
                                        <ArrowImgSVG width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.27439 5.5864L9.88692 0.96111C10.038 0.809567 10.0377 0.564217 9.88613 0.412928C9.73459 0.261757 9.4891 0.262148 9.33795 0.41371L4.99995 4.76369L0.661973 0.413553C0.510801 0.262011 0.265468 0.26162 0.113905 0.412772C0.0379282 0.488612 -6.10352e-05 0.587967 -6.10352e-05 0.687322C-6.10352e-05 0.786423 0.0376735 0.885387 0.113123 0.96109L4.72554 5.5864C4.79815 5.65939 4.89698 5.70035 4.99995 5.70035C5.10292 5.70035 5.20163 5.65927 5.27439 5.5864Z" fill="#353238"/>
                                        </ArrowImgSVG>
                                    }
                                </Div>
                                {
                                    props.showSourceList 
                                    ? 
                                    <Div position='relative' zIndex='9'>
                                        <Div position='absolute' top='0' left='0' backgroundColor='#ffffff' border='2px solid #E3E3E3' borderRadius='8px' boxShadow='0px 5px 20px rgba(53, 50, 56, 0.14)' overflow='hidden'>
                                            {props.sourcesList}
                                        </Div>
                                    </Div>
                                    : 
                                    null
                                }
                            </Div>
                        </>
                        : 
                        null
                    }
                    {
                        props.isLoading 
                        ? 
                        <ButtonLoading zIndex='6' disabled>
                            <PreloaderImg src={preloader} alt='Загрузка'></PreloaderImg>
                        </ButtonLoading>
                        : 
                        (
                            props.isSuccess 
                            ? 
                            <ButtonSuccess type='submit' zIndex='6'>Отправить заявку</ButtonSuccess>
                            : 
                            <Button onClick={props.validAll} zIndex='6'>Отправить заявку</Button>
                        )
                    }
                </Form>
            </PageFlex>
        </Flex>
    )
};
