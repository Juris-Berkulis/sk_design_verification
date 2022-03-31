import React from 'react';
import styledComponents from 'styled-components';

const LogoLetterDivSVGStyle = styledComponents.svg`
    width: ${props => props.width};
    height: ${props => props.height};
    fill: ${props => props.fill};
`

export const LogoLetterDivSVG = ({children, ...props}) => {
    return (
        <LogoLetterDivSVGStyle {...props}>{children}</LogoLetterDivSVGStyle>
    )
};
