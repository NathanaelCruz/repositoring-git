import { createStore } from "redux";
import reducers from "./reducers";


const store = createStore(reducers)

export type StoreType = ReturnType<typeof store.getState>

export default store