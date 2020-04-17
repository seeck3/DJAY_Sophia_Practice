import { GET_BOARDS } from '../Actions/types';

const initialState = {
  boards: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  //   console.log(payload);
  switch (type) {
    case GET_BOARDS:
      return {
        ...state,
        boards: payload,
      };
    default:
      return state;
  }
}
