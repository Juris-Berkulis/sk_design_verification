import React from 'react';
import styledComponents from 'styled-components';

const LogoLetterSVGStyle = styledComponents.svg`
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    fill: ${props => props.fill};
    @media ${props => props.theme.media.width.stair1} {
        width: ${props => props.width / 2 + 'px'};
        height: ${props => props.height / 2 + 'px'};
    }
    @media ${props => props.theme.media.width.stair3} {
        width: ${props => props.width / 4 + 'px'};
        height: ${props => props.height / 4 + 'px'};
    }
`

export const LogoLetterSVG = ({children, ...props}) => {
    return (
        <LogoLetterSVGStyle {...props}>{children}</LogoLetterSVGStyle>
    )
};
