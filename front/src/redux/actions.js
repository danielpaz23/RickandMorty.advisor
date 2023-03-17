import axios from 'axios';
export const ADD_FAV= 'ADD_FAV';
export const REMOVE_FAV='REMOVE_FAV';
export const FILTER= "FILTER";
export const ORDER= "ORDER";
export const GET_FAVALL= "GET_FAVALL";



export function addFav(personaje){
  try {
    return async function(dispatch){
      await axios.post("http://localhost:3001/rickandmorty/fav", personaje)
      return dispatch({
        type: ADD_FAV,
        payload: personaje
      })
    }
  } catch (error) {
    console.log(error.message)
  }

  // axios.post("http://localhost:3001/rickandmorty/fav", personaje)
  //   return{
  //       type: ADD_FAV,
  //       payload: personaje
  //   }
}

export function removeFav(id){
  try {
    return async function(dispatch){
      await axios.delete(`http://localhost:3001/rickandmorty/fav${id}`)
      return dispatch({
        ttype: REMOVE_FAV,
        payload: id
      })
    }
  } catch (error) {
    console.log(error.message)
  }
  // axios.delete(`/${id}`)
  //   return{
  //       type: REMOVE_FAV,
  //       payload: id
  //   }
}
export function getFavorites(){
  try {
    return async function(dispatch){
      const response = await axios.get(`http://localhost:3001/rickandmorty/fav`)
      return dispatch({
        type:GET_FAVALL,
        payload: response.data
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}



export function filterCards(status) {
    return {
      type: FILTER,
      payload: status,
    };
  }
  
  export function orderCards(id) {
    return {
      type: ORDER,
      payload: id,
    };
  }
  