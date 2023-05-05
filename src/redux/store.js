import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReduser from "./reduser/profileReduser";
import dialogReduser from './reduser/dialogReduser';
import usersReduser from "./reduser/usersReduser";
import authReduser from "./reduser/authReduser";
import { reducer as formReducer } from "redux-form";
import appReduser from './reduser/appReduser';
import settingsReduser from "./reduser/settingsReduser";
import thunkMiddleware from 'redux-thunk';



let rootReduser = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogReduser,
    usersPage: usersReduser,
    settings: settingsReduser,
    auth: authReduser,
    app: appReduser,
    form: formReducer,
});


const store = createStore(rootReduser,applyMiddleware (thunkMiddleware))


export default store;