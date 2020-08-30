import {createStore,combineReducers} from 'redux';
import {Data} from './Data.js'
import {Wonders} from './Wonders.js'

export const ConfigureStore=()=>{
  const store=createStore(combineReducers({
      data:Data,
      wonders:Wonders
  })
);
  return store;
}
