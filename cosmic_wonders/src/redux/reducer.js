
import {wonders} from '../shared/data.js';
import {data} from "../shared/carousel_data.js"

export const intitialState={
    wonders:wonders,
    data:data
}

export const Reducer=(state=intitialState,action)=>{
  return state;
}
