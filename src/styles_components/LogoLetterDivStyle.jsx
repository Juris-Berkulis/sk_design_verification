import React from 'react';
import styledComponents from 'styled-components';
import { Div } from './DivStyle';

const LogoLetterDivStyle = styledComponents(Div)`
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    @media ${props => props.theme.media.width.stair1} {
        width: ${props => props.width / 2 + 'px'};
        height: ${props => props.height / 2 + 'px'};
    }
    @media ${props => props.theme.media.width.stair3} {
        width: ${props => props.width / 4 + 'px'};
        height: ${props => props.height / 4 + 'px'};
    }
`

export const LogoLetterDiv = ({children, ...props}) => {
    return (
        <LogoLetterDivStyle {...props}>{children}</LogoLetterDivStyle>
    )
};
