import React from 'react';
import styledComponents from 'styled-components';
import { Paragraph } from './ParagraphStyle';

export const ParagraphErrorStyle = styledComponents(Paragraph)`
    position: ${props => props.position};
    top: ${props => props.top};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
`

export const ParagraphError = (props) => {
    return (
        <ParagraphErrorStyle {...props}/>
    )
};
