import {createStore} from './modules/store.js';
import {reducer} from './modules/reducer.js';
import { add, subtract, reset } from './modules/actions.js';

const store = createStore(reducer);

store.subscribe((_, next) => console.log(next))


store.getState();
store.dispatch(add());
store.dispatch(add());
store.dispatch(add());
store.dispatch(add());

store.dispatch(subtract());

store.dispatch(reset());

