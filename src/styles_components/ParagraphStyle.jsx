import React from 'react';
import styledComponents from 'styled-components';

export const ParagraphStyle = styledComponents.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.fontSize || '14px'};
    line-height: ${props => props.lineHeight || '150%'};
    color: ${props => props.colorHover ? 'inherit' : '#353238'};
    margin: ${props => props.margin || '0'};
    cursor: ${props => props.cursor};
    z-index: ${props => props.zIndex};
`

export const Paragraph = (props) => {
    return (
        <ParagraphStyle {...props}/>
    )
};
