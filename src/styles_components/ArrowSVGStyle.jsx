import React from 'react';
import styledComponents from 'styled-components';
import { ImgSVG } from './ImgSVGStyle';

const ArrowImgSVGStyle = styledComponents(ImgSVG)`
    position: absolute;
    top: ${props => props.top || '22.3px'};
    right: ${props => props.right || '15px'};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
`

export const ArrowImgSVG = ({children, ...props}) => {
    return (
        <ArrowImgSVGStyle {...props}>{children}</ArrowImgSVGStyle>
    )
};
