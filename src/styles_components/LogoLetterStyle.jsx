import React from 'react';
import styledComponents from 'styled-components';

const LogoLetterStyle = styledComponents.div`
    height: 70px;
    margin-right: ${props => props.marginRight || '0'};
`

export const LogoLetter = ({children, ...props}) => {
    return (
        <LogoLetterStyle {...props}>{children}</LogoLetterStyle>
    )
};
