import React from 'react';
import styledComponents, {keyframes} from 'styled-components';

const rotatePreloader = keyframes`
    0% {
        transform: rotateZ(0deg)
    }
    100% {
        transform: rotateZ(360deg)
    }
`

export const PreloaderImgStyle = styledComponents.img`
    width: 30px;
    animation: ${rotatePreloader} 1s linear 0s infinite;
`

export const PreloaderImg = (props) => {
    return (
        <PreloaderImgStyle {...props}/>
    )
};
