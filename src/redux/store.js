
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducer/rootReducer';

//includes : reducers, middleware...

const store = createStore(rootReducer, composeWithDevTools());


export default store;