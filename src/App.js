import React from 'react';
import styledComponents from 'styled-components';
import { Verification } from './components/Verification/Verification';

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
