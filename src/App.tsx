import React from 'react';
import { Container } from 'react-bootstrap';
import {Provider} from 'react-redux';
import TabComponent from './components/tabs.component';

import store from './store';

const App = ():JSX.Element => <Provider store={store}><Container className="container"><TabComponent /></Container></Provider>;

export default App;
