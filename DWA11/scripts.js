import {createStore} from './modules/store.js';
import {reducer} from './modules/reducer.js';
import { add, subtract, reset } from './modules/actions.js';

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(add());
store.dispatch(add());
console.log(store.getState());

store.dispatch(subtract());
console.log(store.getState());

store.dispatch(reset());
console.log(store.getState());