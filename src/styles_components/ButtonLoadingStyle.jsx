import React from 'react';
import styledComponents from 'styled-components';

export const ButtonLoadingStyle = styledComponents.button`
    width: 100%;
    height: 50px;
    background: #0086A8;
    border-radius: 8px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #828282;
    disabled: disabled;
    z-index: ${props => props.zIndex};
`

export const ButtonLoading = ({children, ...props}) => {
    return (
        <ButtonLoadingStyle {...props}>{children}</ButtonLoadingStyle>
    )
};
