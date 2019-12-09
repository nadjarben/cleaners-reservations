import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
//import { addLocaleData } from 'react-intl';
//import he from 'react-intl/locale-data/he';
//import en from 'react-intl/locale-data/en';
//import fr from 'react-intl/locale-data/fr';
import { localeSet } from './store/actions/localeActions';
//import registerServiceWorker from './registerServiceWorker';


//addLocaleData(he);
//addLocaleData(en);
//addLocaleData(fr);

if (localStorage.alhubLang) {
    store.dispatch(localeSet(localStorage.alhubLang)
)};

const rootElement = document.getElementById(".container");

if (rootElement.hasChildNodes()) {
    
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

//registerServiceWorker();
serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

