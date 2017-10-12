import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App height={20} width={30} />, document.getElementById('root'));
registerServiceWorker();
