import * as Session_API_Util from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => {
  console.log(errors);
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = user => dispatch => (
  Session_API_Util.signup(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser)))).fail(errors => (
      dispatch(receiveErrors(errors)))
));

export const logout = () => dispatch => (
  Session_API_Util.logout().then(currentUser => (
    dispatch(receiveCurrentUser(currentUser)))).fail(errors => (
      dispatch(receiveErrors(errors)))
));

export const signup = user => dispatch => (
  Session_API_Util.signup(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser)))).fail(errors => (
      dispatch(receiveErrors(errors)))
));
