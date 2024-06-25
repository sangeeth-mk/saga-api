import { takeLatest } from 'redux-saga/effects';
import { GET_USER } from '../ducks/user';
import { handlegetuser } from './handlers/user3';

export function* watchersaga(){

yield takeLatest (GET_USER,handlegetuser)

}