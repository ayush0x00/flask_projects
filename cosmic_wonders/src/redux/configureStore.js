import {createStore,combineReducers} from 'redux';
import {Data} from './Data.js'
import {Wonders} from './Wonders.js'
import {Comments} from './Comments'

export const ConfigureStore=()=>{
  const store=createStore(combineReducers({
      data:Data,
      wonders:Wonders,
      comment:Comments
  })
);
  return store;
}
