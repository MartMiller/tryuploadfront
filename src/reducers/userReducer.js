import {
  AXIOS_USERS,
  DELETE_USER,
  ADD_USER,
  BEGIN_LOAD_AXIOS_USERS,
  ERROR_LOAD_AXIOS_USERS,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../actions/types'

const initialState = {
  users: [],
  loading: true,
  error: false,
  token: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case BEGIN_LOAD_AXIOS_USERS:
      return {
        ...state,
        loading: true,
      }
    case AXIOS_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false,
      }
    case ERROR_LOAD_AXIOS_USERS:
      console.log('Error load users')
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case DELETE_USER:
      return {
        ...state,
        users: action.payload
        // users: state.users.filter((user) => user._id !== action.payload)
      }
    case ADD_USER:
      return {
        ...state,
        users: action.payload
        // users: [action.payload, ...state.users]
      }
    case REGISTER_USER:
      return {
        ...state
      }
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload
      }
    case LOGOUT_USER:
      return {
        ...state,
        token: null
      }
    default:
      return state;
  }
} 