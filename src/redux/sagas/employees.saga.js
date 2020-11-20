import { put as dispatch, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* getEmployees(action) {
  try {
    const response = yield axios.get('/api/employees');

    yield dispatch({
      type: 'SET_EMPLOYEES',
      payload: response.data,
    });
  } catch (error) {
    console.log('Error:', error);
    yield dispatch({ type: 'EMPLOYEES_ERROR' });
  }
}

function* employeesSaga() {
  yield takeLatest('GET_EMPLOYEES', getEmployees);
}

export default employeesSaga;
