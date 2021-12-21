import { combineReducers, createStore } from "redux";
import dialoguesReducer from "./dialogues-reduser";
import profileReducer from "./profile-reducer";

let reducers = combineReducers( {
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,

});

let store = createStore(reducers);

export default store;