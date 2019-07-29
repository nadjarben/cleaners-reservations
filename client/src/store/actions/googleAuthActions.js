import { 
    SIGN_IN, 
    SIGN_OUT,
} from './types';

const admin = '104068328308971597103'

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