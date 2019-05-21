import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import he from 'react-intl/locale-data/he';
import { localeSet } from './store/actions/localeActions';
import registerServiceWorker from './registerServiceWorker';

addLocaleData(en);
addLocaleData(fr);
addLocaleData(he);

if (localStorage.alhubLang) {
    store.dispatch(localeSet(localStorage.alhubLang)
    )};

    // On page load
(function() {
    // Check if iOS
    if(!(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)){ return false; }
  
    // Check if already in webapp
    if(window.navigator.standalone == true){ return false; }
  
    // Check if you already asked them to add to homescreen
    if(document.cookie.search("alreadAsked") >= 0){ return false; }
  
    // Ask user to add to homescreen
    document.getElementById("hiddenPrompt").style.display = 'inherit';
  });
  
  // After clicking a button to dismiss prompt
  function hidePromptInFuture(){
    // Do not show prompt again
    document.cookie = "alreadAsked=true; expires=Thu, 18 Dec 2099 12:00:00 UTC";
  }

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('.container'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
