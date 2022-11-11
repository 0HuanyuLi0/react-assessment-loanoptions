import { createStore } from 'redux';

const initialState = {
    results: null,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'clickBtn/load':
            return {
                ...state,
                results: [...action.payload]
            }

        case 'clickBtn/add':
            return {
                ...state,
                results: [...state.results, state.results[0]]
                //When ‘ADD’ is clicked, insert the ﬁrst item of the table to the last (ﬁrst item should remain as it is ) -> always insert the first item?
            }

        case 'clickBtn/delete':
            return {
                ...state,
                results: state.results.filter((_,i) => i !== state.results.length-1)
            }

        default:
            console.log("ACTION,", action);
            return state
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);