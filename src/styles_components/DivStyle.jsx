import React from 'react';
import styledComponents from 'styled-components';

export const DivStyle = styledComponents.div`
    position: ${props => props.position || 'static'};
    display: ${props => props.display || 'block'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
`

export const Div = (props) => {
    return (
        <DivStyle {...props}/>
    )
};
