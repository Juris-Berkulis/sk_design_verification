import React from 'react';
import styledComponents from 'styled-components';

export const ParagraphStyle = styledComponents.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #353238;
    margin: ${props => props.margin || '0'};
`

export const Paragraph = (props) => {
    return (
        <ParagraphStyle {...props}/>
    )
};
