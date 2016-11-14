import axios from 'axios';
import * as types from './Types';

const ROOT_URL = 'http://demo5258223.mockable.io';

export function fetchHome() {
  return dispatch => {
    axios.get(`${ROOT_URL}/home`)
      .then(response => {
        console.log(response);

        dispatch({ type: types.GET_HTML, payload: response.data.msg });
      })
      .catch((error) => {
        console.log('couldnt get html', error);
      });
  };
}

export function fetchRefresh() {
  return dispatch => {
    axios.get(`${ROOT_URL}/refresh`)
      .then(response => {
        console.log(response.data);

        dispatch({ type: types.GET_REFRESH, payload: response.data.refresh });
      })
      .catch((error) => {
        console.log('couldnt get refresh', error);
      });
  };
}
