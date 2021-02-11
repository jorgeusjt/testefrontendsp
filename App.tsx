import React from 'react';
import AppStack from './src/routes/AppStack';

import { Provider } from 'react-redux';
import store from './src/store';

declare const global: {HermesInternal: null | {}};

const App = () => { 
  return(
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
