import React from 'react';
import styledComponents from 'styled-components';
// import { Flex } from './styles_components/FlexStyle';
import { Verification } from './components/Verification/Verification';
// import { Paragraph } from './styles_components/ParagraphStyle';

const AppWrapper = styledComponents.div`
  width: 100vw;
  min-height: 100vh;
`

export const App = () => {
  return (
    <AppWrapper>
      <Verification></Verification>
    </AppWrapper>
  );
}
