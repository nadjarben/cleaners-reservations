import { 
    SIGN_IN, 
    SIGN_OUT,
} from './types';

const admin = '108677919013990968799'
//118315381336212654574 nadjar.benj

export const signIn = (userId) => {
    if(userId === admin)
        return {
            type: SIGN_IN,
            payload: userId,
            isAdmin: true
        }
    else
        return {
            type: SIGN_IN,
            payload: userId,
            isAdmin: false
            }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};