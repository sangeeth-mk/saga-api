import { setuser } from "../../ducks/user";
import { call } from "redux-saga/effects";
import { requestgetuser } from "../requests/user2";
import { put } from "redux-saga/effects";

export function* handlegetuser(action){
    try{
        const response = yield call(requestgetuser);
        const userdata = response.data;
        yield put(setuser(userdata))
    }catch(error){
        console.error();
    }
}