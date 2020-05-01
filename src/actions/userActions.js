import {
  AXIOS_USERS,
  DELETE_USER,
  ADD_USER,
  BEGIN_LOAD_AXIOS_USERS,
  ERROR_LOAD_AXIOS_USERS,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from './types'
import axios from 'axios';



export function axiosUsers(token) {
  return async dispatch => {
    try {
      dispatch({ type: BEGIN_LOAD_AXIOS_USERS });
      const headers = { authToken: token }
      // const res = await axios.get('/api/', {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/`, {
        headers: headers
      })
      console.log('res', res)
      dispatch({
        type: AXIOS_USERS,
        payload: res.data.reverse(),
      });
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: err });
    }
  }
};



export function deleteUser(id, token) {
  return async dispatch => {
    try {
      // const res = await axios.delete('http://localhost:5000/' + id)
      const headers = { authToken: token }
      const res = await axios.delete(`${process.env.REACT_APP_API}/api/` + id, {
        headers: headers
      })
      console.log('res', res)
      dispatch({
        type: DELETE_USER,
        payload: res.data.reverse()
      })
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: err })
    }
  }
}


export function addUser(newUser, token) {
  return async dispatch => {
    try {
      const headers = { authToken: token }
      const res = await axios.post(`${process.env.REACT_APP_API}/api/add`, newUser, {
        headers: headers
      })
      dispatch({
        type: ADD_USER,
        payload: res.data.reverse()
      })
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: err })
    }

  }
}


export const registerUser = (newUser) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/register`, newUser)
      dispatch({
        type: REGISTER_USER,
      })
    }
    catch (err) {

    }
  }
}

export const loginUser = (user) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/login`, user)
      dispatch({
        type: LOGIN_USER,
        payload: res.data
      })
    }
    catch (err) {

    }
  }
}

export const logOutUser = () => {
  return async dispatch => {
    try {
      dispatch({
        type: LOGOUT_USER,
        payload: null
      })
    }
    catch (err) {

    }
  }
}