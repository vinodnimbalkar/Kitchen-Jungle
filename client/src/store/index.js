import { createStore, combineReducers } from "redux";
import { recipieReducer } from "./reducers/recipieReducer";

const reducer = combineReducers({
  recipieData: recipieReducer,
});

const store = createStore((state, action) => reducer(state, action), {});
export default store;
