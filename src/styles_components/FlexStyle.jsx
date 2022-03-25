import React from 'react';
import styledComponents from 'styled-components';

export const FlexStyle = styledComponents.div`
    width: ${props => props.width || '100%'};
    min-width: ${props => props.minWidth || 'auto'};
    max-width: ${props => props.maxWidth || 'auto'};
    height: ${props => props.height || 'auto'};
    min-height: ${props => props.minHeight || 'auto'};
    display: flex;
    flex-wrap: ${props => props.flexWrap || 'nowrap'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    @media ${props => props.theme.media.width.stair1} {
        width: ${(props => props.pageColumn && '90vw') || (props => props.width || '100%')};
        margin: ${props => props.pageColumn && '15vh 5vw'};
    }
`

export const Flex = (props) => {
    return (
        <FlexStyle {...props}/>
    )
};
