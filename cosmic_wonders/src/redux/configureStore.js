import {createStore} from 'redux';
import {Reducer, intitialState} from './reducer.js'

export const ConfigureStore=()=>{
  const store=createStore(
    Reducer,intitialState
  );
  return store;
}
