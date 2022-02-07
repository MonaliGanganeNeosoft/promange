import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { newProjectReducer, projectAllDetailsReducer, projectAllnotAdminReducer, projectAllReducer, projectDeleteDetailsReducer } from "./reducers/projectAllReducer";
import { userReducer } from "./reducers/userReducer";


const reducer = combineReducers({
    projectDetails:projectAllReducer,
    projectDetail:projectAllDetailsReducer,
    user:userReducer,
    newProject:newProjectReducer,
    projectDelete:projectDeleteDetailsReducer,
});
let initialState = {
    
  };
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;