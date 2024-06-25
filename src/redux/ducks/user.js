export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';

export const getuser =()=>({
    type:GET_USER
})

export const setuser =user=>({
    type:SET_USER,
    payload:user
})

const initialstate = {
    user:{}
}

const userReducer = (state = initialstate, action)=>{

switch (action.type) {

        case SET_USER:
        return{
            user:action.payload
        }
        

    default:
        return state;
}

}

export default userReducer;