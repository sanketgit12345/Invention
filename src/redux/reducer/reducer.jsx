import { actionTypes } from "../actions/actions";


const initailData = {
     employeeList:[]
}

const mainReducer = (state=initailData,action) => {
     switch(action.type) {
        case actionTypes.SET_EMPLOYEE_LIST:
            return{ 
                ...state,
                employeeList:action?.payload
            };
        default:
            return state;
     }
}

export default mainReducer;