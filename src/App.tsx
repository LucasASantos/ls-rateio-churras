import React from 'react';
import {Provider} from 'react-redux';
import TabComponent from './components/tabs.component';

import store from './store';

const App = ():JSX.Element => <Provider store={store}><TabComponent /></Provider>;

export default App;
