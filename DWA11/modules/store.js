export function createStore(reducer){
    let state = {
    count: 0
    }
    let listeners = [];

   function getState(){
    return state;
   }

   function dispatch(action){
    state = reducer(state, action);
    listeners.forEach(listener => listener());
   }

   function subscribe(listener){
     listeners.push(listener);

     return function unsubscribe(){
        listeners = listeners.filter(l => l  !== listener)
     }
   }

   return{
    getState,
    dispatch,
    subscribe
   }
}