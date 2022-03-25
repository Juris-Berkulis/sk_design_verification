import React from 'react';
import styledComponents from 'styled-components';

const LogoLetterSVGStyle = styledComponents.svg`
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    fill: ${props => props.fill};
    xmlns: http://www.w3.org/2000/svg;
`

export const LogoLetterSVG = ({children, ...props}) => {
    return (
        <LogoLetterSVGStyle {...props}>{children}</LogoLetterSVGStyle>
    )
};
