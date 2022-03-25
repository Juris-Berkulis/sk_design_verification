import React from 'react';
import styledComponents from 'styled-components';

export const DivStyle = styledComponents.div`
    position: ${props => props.position || 'static'};
    top: ${props => props.top};
    left: ${props => props.left};
    display: ${props => props.display || 'block'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    z-index: ${props => props.zIndex || 'auto'};
    color: ${props => props.colorHover && props.color};
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    border-bottom: ${props => props.borderBottom};
    border-radius: ${props => props.borderRadius};
    box-shadow: ${props => props.boxShadow};
    overflow: ${props => props.overflow};
    cursor: ${props => props.cursor};
    &:hover {
        background-color: ${props => props.backgroundColorHover};
        color: ${props => props.colorHover};
    }
`

export const Div = (props) => {
    return (
        <DivStyle {...props}/>
    )
};
