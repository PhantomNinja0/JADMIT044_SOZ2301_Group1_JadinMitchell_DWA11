export function reducer(state, action){
    switch (action.type) {
        case 'ADD':
          return { 
            ...state,
            count: state.count + 1
          };
        case 'SUBTRACT':
          return {
            ...state,
            count: state.count - 1
          };

        case 'RESET':
            return {
                ...state,
             count: state.count = 0
            }
        default:
          return state;
      }
}