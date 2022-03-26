import React from 'react';
import styledComponents from 'styled-components';

export const InputStyle = styledComponents.input`
    position: ${props => props.position || 'absolute'};
    top: 5px;
    left: 0;
    z-index: 4;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '50px'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '18px 15px'};
    background: #FFFFFF;
    border: ${props => props.isError ? '2px solid #EB5E55' : '2px solid #E3E3E3'};
    border-radius: 8px;
    type: text;
    &:placeholder: ${props => props.placeholder || ''};
    &::-moz-placeholder: {
        color: #CDCAD0;
    }
    &::-webkit-input-placeholder {
        color: #CDCAD0;
    }
    &:focus {
        outline: none;
        border: ${props => props.isError ? '2px solid #EB5E55' : '2px solid #0086A8'};
    }
`

export const Input = (props) => {
    return (
        <InputStyle {...props}/>
    )
};
