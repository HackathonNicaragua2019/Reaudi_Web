import authReducer from "./authReducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";
import newsReducer from "./newsReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    news: newsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer