import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
