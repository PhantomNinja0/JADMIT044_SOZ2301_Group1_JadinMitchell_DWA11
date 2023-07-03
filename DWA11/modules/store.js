export function createStore(reducer){
    let state = [{
    count: 0
    }
  ]
    let listeners = [];

   function getState(){
    return Object.freeze({...state[0]})
   }

   const dispatch = (action) => {
    const prev = getState()
    const next = reducer(prev, action);
    
    listeners.forEach((item) => item(prev, next));
    state.unshift(next)
   }

   const subscribe = (listener) => {
    listeners.push(listener);
    const filt = (item) => item !== listener

    const unsubscribe = () => {
      const nextSubscribers = listeners.filter(filt)
      listeners = nextSubscribers;
    }

    return{
      unsubscribe,
     }
  }

   return{
    getState,
    dispatch,
    subscribe,
   }
}
