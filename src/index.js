import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './css/ionicons.min.css';
import './css/jquery.scrollbar.css';
import './css/font-awesome.min.css';
import './css/emoji.css';
import './css/bootstrap.min.css';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
