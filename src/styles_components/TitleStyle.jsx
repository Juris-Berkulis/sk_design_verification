import React from 'react';
import styledComponents from 'styled-components';
import { ParagraphStyle } from './ParagraphStyle';

const TitleStyle = styledComponents(ParagraphStyle)`
    font-family: 'SF UI Display';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
`

export const Title = (props) => {
    return (
        <TitleStyle {...props}/>
    )
};
