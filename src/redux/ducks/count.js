// import { type } from "@testing-library/user-event/dist/type";

//Action

const INCREMENT_COUNT = "INCREMENT_COUNT";

const DECREMENT_COUNT = "DECREMENT_COUNT";


export const increment = ()=>({
type:INCREMENT_COUNT})

export const decrement = ()=>({
    type:DECREMENT_COUNT
})

const initialstate = {
    count:0
}

const countReducer = (state = initialstate, action)=>{

switch (action.type) {

    case INCREMENT_COUNT:
        return{
            count:state.count + 1
        }
        
        case DECREMENT_COUNT:
        return{
            count:state.count - 1
        }
        

    default:
        return state;
}

}

export default countReducer;