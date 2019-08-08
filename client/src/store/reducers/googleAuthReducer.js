import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    isAdmin: null,
    name: '',
    surname: '',
    tz: '',
    address: '',
    phone: '',
    mail: ''
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state, 
                isSignedIn: true, 
                userId: action.payload, 
                isAdmin: action.isAdmin,
                name: action.name, 
                surname: action.surname,
                tz: action.tz,
                address: action.address,
                phone: action.phone,
                mail: action.mail 
            };
        case SIGN_OUT:
            return {
                ...state, 
                isSignedIn: false, 
                userId: null,
            };
        default:
            return state;
    }
};