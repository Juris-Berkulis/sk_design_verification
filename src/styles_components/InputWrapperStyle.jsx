import React from 'react';
import styledComponents from 'styled-components';

export const InputWrapperStyle = styledComponents.div`
    position: ${props => props.position || 'relative'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '50px'};
    margin: ${props => props.margin || '0 0 20px'};
    padding: ${props => props.padding || '0'};
    z-index: ${props => props.zIndex || '6'};
    color: ${props => props.isError ? '#EB5E55' : '#828282'};
    &:focus-within {
        color: ${props => props.isError ? '#EB5E55' : '#0086A8'};
    }
`

export const InputWrapper = (props) => {
    return (
        <InputWrapperStyle {...props}/>
    )
};
