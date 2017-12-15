import axios from 'axios';
const initialState = {
 people: []
}

const ADD_PERSON = "ADD_PERSON"
    , GET_PERSON = "GET_PEOPLE"
export default (state = initialState, action) => {
  switch (action.type) {
  case GET_PERSON + '_FULFILLED':
  case ADD_PERSON + '_FULFILLED':
    return Object.assign( {}, state, { people: [...state.people, action.payload ]} ) 

  
  default:
    return state
  }
}

export function addPerson( name, age ){
 let person = axios.post("http://localhost:8080/api/users", {name, age} )
    return {
        type: ADD_PERSON,
        payload: person
    }
}

export function getpeople(){
  let person = axios.get("http://localhost:8080/api/users")
  return{
    type: GET_PERSON,
    payload: person
  }
}