import React from 'react';
import styledComponents from 'styled-components';

export const SpanStyle = styledComponents.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #353238;
    margin: ${props => props.margin || '0'};
`

export const Span = (props) => {
    return (
        <SpanStyle {...props}/>
    )
};
