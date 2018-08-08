import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter.jsx';
import registerServiceWorker from './registerServiceWorker';

const appRoot = document.getElementById('root');

const render = () => ReactDOM.render(<AppRouter />, appRoot);
render();
registerServiceWorker();
