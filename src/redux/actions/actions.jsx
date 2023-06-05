export const actionTypes = {
     SET_EMPLOYEE_LIST:"SET_EMPLOYEE_LIST"
}


export const setEmployeeList = (payload) => {
     return {
         type:actionTypes.SET_EMPLOYEE_LIST,
         payload:payload
     }
}