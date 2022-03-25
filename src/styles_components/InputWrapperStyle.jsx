import React from 'react';
import styledComponents from 'styled-components';

export const InputWrapperStyle = styledComponents.div`
    position: ${props => props.position || 'relative'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '50px'};
    margin: ${props => props.margin || '0 0 20px'};
    padding: ${props => props.padding || '0'};
`

export const InputWrapper = (props) => {
    return (
        <InputWrapperStyle {...props}/>
    )
};
