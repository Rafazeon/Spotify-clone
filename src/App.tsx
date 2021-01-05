import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
    <Router>
        <Routes />
        <GlobalStyle />
    </Router>
);

export default App;
