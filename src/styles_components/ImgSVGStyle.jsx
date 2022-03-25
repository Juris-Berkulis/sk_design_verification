import React from 'react';
import styledComponents from 'styled-components';

const ImgSVGStyle = styledComponents.svg`
    fill: ${props => props.fill};
`

export const ImgSVG = ({children, ...props}) => {
    return (
        <ImgSVGStyle {...props}>{children}</ImgSVGStyle>
    )
};
