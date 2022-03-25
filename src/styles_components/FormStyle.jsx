import React from 'react';
import styledComponents from 'styled-components';

const FormStyle = styledComponents.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 440px;
    min-width: 440px;
    min-height: 466px;
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    background: #FFFFFF;
    box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
    border-radius: 8px;
    @media ${props => props.theme.media.width.stair1} {
        width: 90vw;
        margin: 0 5vw 15vh;
    }
`

export const Form = (props) => {
    return (
        <FormStyle {...props}/>
    )
};
