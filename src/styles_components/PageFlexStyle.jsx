import React from 'react';
import styledComponents from 'styled-components';
import { FlexStyle } from './FlexStyle';

const PageFlexStyle = styledComponents(FlexStyle)`
    @media ${props => props.theme.media.width.stair1} {
        flex-direction: column;
        justify-content: flex-start;
        align-items: 'center';
    }
`

export const PageFlex = (props) => {
    return (
        <PageFlexStyle {...props}/>
    )
};
