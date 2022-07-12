import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';
import rootReducer from './reducers';

export const store = createStore(rootReducer, composeWithDevToolsDevelopmentOnly(
  applyMiddleware(thunk)
));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
