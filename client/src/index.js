import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import he from 'react-intl/locale-data/he';
import { localeSet } from './store/actions/localeActions';


addLocaleData(en);
addLocaleData(fr);
addLocaleData(he);

if (localStorage.alhubLang) {
    store.dispatch(localeSet(localStorage.alhubLang)
    )};

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('.container'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
