import { auth, database } from './../utils/firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
} from './../constants';
import { navigate } from './../RootNavigation';
import _ from 'lodash';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const {
    currentUser: { uid }
  } = auth;

  return (dispatch) => {
    database
      .ref(`/users/${uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        navigate('EmployeeList');
      });
  };
};

export const employeeFetch = () => {
  const {
    currentUser: { uid }
  } = auth;

  return (dispatch) => {
    database.ref(`/users/${uid}/employees`).on('value', (snapshot) => {
      const employees = _.map(snapshot.val(), (val, uid) => ({ ...val, uid }));
      dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: employees });
    });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = auth;

  return (dispatch) => {
    database
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        navigate('EmployeeList');
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = auth;

  return (dispatch) => {
    database
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
        navigate('EmployeeList');
      });
  };
};
