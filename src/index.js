import React from 'react';
import ReactDOM from 'react-dom';

// Styled components

import { PrimaryButton, SecondaryButton, WarningButton } from './components/Buttons';
import { GlobalStyles } from './utils/Global';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Primary Button</SecondaryButton>
      <WarningButton>Primary Button</WarningButton>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))