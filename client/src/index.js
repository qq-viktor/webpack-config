import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

const title = `Hello world, react!!!11`;

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

module.hot.accept();

import './sass/app.sass';