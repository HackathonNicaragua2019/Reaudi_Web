import firebase from "firebase";
import {firestore} from 'firebase';
export const signIn = ( credentials) => (dispatch, getState) => {

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password,
    ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
    });
};
export const signOut = () => (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
    });
};
export const signUp = (newUser) => (dispatch, getState) => {

    firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password,
    )
        .then(resp => firestore().collection('users').doc(resp.user.uid).set({
            firstName: newUser.firstname,
            lastName: newUser.lastname,
            initials: `${newUser.firstname[0]}${newUser.lastname[0]}`
        }))
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        })
        .catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err });
        });
};