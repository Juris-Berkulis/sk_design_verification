import React from 'react';
import styledComponents from 'styled-components';

export const ButtonStyle = styledComponents.button`
    width: 100%;
    height: 50px;
    background: #E3E3E3;
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

export const Button = ({children, ...props}) => {
    return (
        <ButtonStyle {...props}>{children}</ButtonStyle>
    )
};
