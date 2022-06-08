import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import './styles/App.css';
import './styles/Book.css';

const getID = () => Math.floor(Math.random() * 1000);
const initialState = [
  {
    id: getID(),
    title: 'Wuthering Heights',
    category: 'Drama',
  },
  {
    id: getID(),
    title: 'Dracula',
    category: 'Horror',
  },
  {
    id: getID(),
    title: 'The Universe in a Nutshell',
    category: 'Learning',
  },
];


const store = createStore(rootReducer, { books: initialState, filter: 'ALL' }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); /* eslint-disable-line */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
