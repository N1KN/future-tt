import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);

//TODO: Remove
window._debugVal = store;

export default store;
