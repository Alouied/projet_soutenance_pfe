import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store';
import {Provider} from 'react-redux';
import App from './App';
import ReactDOM from 'react-dom';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  
    <Provider store={store}>
      <App />
    </Provider>
 
);


