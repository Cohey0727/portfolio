import { handleActions } from 'redux-actions';
import actions from './actions';

const initialState = {
  status: 'success',
  data: [],
  message: ''
};
export default handleActions(
  {
    [actions.app.exhange.read.start]: (state, action) => ({
      ...state,
      status: 'loading'
    }),
    [actions.app.exhange.read.success]: (state, action) => ({
      ...state,
      status: 'success',
      data: action.payload
    }),
    [actions.app.exhange.read.failure]: (state, action) => ({
      ...state,
      status: 'failure',
      message: action.message
    })
  },
  initialState
);
