import React from 'react';
import styledComponents from 'styled-components';

const LogoLetterStyle = styledComponents.div`
    height: 70px;
    margin-right: ${props => props.marginRight || '0'};
    @media ${props => props.theme.media.width.stair1} {
        height: 35px;
    }
    @media ${props => props.theme.media.width.stair3} {
        height: 17.5px;
    }
`

export const LogoLetter = ({children, ...props}) => {
    return (
        <LogoLetterStyle {...props}>{children}</LogoLetterStyle>
    )
};
