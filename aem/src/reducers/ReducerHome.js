import { GET_HTML, GET_REFRESH } from '../actions/Types';

const INITIAL_STATE = { danger: '', refresh: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_HTML:
      return { ...state, danger: action.payload };
    case GET_REFRESH:
      console.log(action.payload);
      return { ...state, refresh: action.payload };
    default:
      return state;
  }
}
