import React from 'react';
import styledComponents from 'styled-components';

export const LabelStyle = styledComponents.label`
    position: ${props => props.position || 'absolute'};
    top: 0;
    left: 10px;
    z-index: 5;
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0 5px'};
    font-family: 'SF UI Display';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.25px;
    background-color: #ffffff;
    @media ${props => props.theme.media.width.stair2} {
        font-size: 8px;;
    }
`

export const Label = ({children, ...props}) => {
    return (
        <LabelStyle {...props}>{children}</LabelStyle>
    )
};
