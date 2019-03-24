import { createActions } from 'redux-actions';

export default createActions({
  APP: {
    EXHANGE: {
      READ: {
        START: (payload) => ({ payload }),
        SUCCESS: (payload) => ({ payload }),
        FAILUER: (payload) => ({ payload })
      }
    }
  }
});
