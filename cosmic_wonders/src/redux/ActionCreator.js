import * as ActionTypes from './ActionTypes'

export const addComment=(celestialId,username,comment)=> ({
  type:ActionTypes.ADD_COMMENT,
  payload:{
    celestialId:celestialId,
    username:username,
    comment:comment
  }
});
