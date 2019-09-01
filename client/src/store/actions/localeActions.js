import { LOCALE_SET } from './types';

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang
})

export const setLocale = (lang, props) => dispatch => {
    localStorage.alhubLang = lang;
    dispatch(localeSet(lang));    
    //if(window.location.href === 'http://localhost:3000/discoverfr' && lang === 'fr')
        //return history.push('')
        //else return alert(false)
}