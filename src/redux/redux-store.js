import {combineReducers, legacy_createStore as createStore} from "redux";  
import feedReducer from "./feed-reducer";
import dialogsReducer from "./dialogs-reducer";
let reducers = combineReducers({
    FeedPage: feedReducer,
    DialogsPage: dialogsReducer
});
let store = createStore(reducers);
window.store = store;
export default store;