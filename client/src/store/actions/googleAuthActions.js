import { 
    SIGN_IN, 
    SIGN_OUT,
} from './types';

const admin = '104068328308971597103'

export const signIn = (userId, name, surname, address, phone, mail) => {
    if(userId === admin)
        return {
            type: SIGN_IN,
            payload: userId,
            isAdmin: true,
            name: name,
            surname: surname,
            phone: phone,
            address: address,
            phone: phone,
            email: mail
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