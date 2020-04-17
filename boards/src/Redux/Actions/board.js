import axios from 'axios';

import { GET_BOARDS } from './types';

// Get Boards
export const getBoards = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/board');

    dispatch({
      type: GET_BOARDS,
      payload: res.data,
    });
  } catch (error) {
    console.log('Error from Server : ', error);
  }
};
