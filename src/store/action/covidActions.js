import Axios from "axios"

export const covidActionType = {
    GET_ALL_PATIENTS: 'GET_ALL_PATIENTS',
    GET_TOTAL_CASES: 'GET_TOTAL_CASES',
    ITEMS_LOADING: 'ITEMS_LOADING'
}

export const getAllPatients = () => {
    return dispatch => {
        dispatch(setItemsLoading());
        return Axios.get('https://coronavirus-ph-api.herokuapp.com/cases', {
            headers: {
                "Content-Type": "application.json"
            }
        }).then((data) => data)
        .then(patients => dispatch({type: covidActionType.GET_ALL_PATIENTS, data: patients.data }))
    }
}

export const getAllCases = () => {
    return dispatch => {
        return Axios.get('https://corona.lmao.ninja/countries/Philippines', {
            headers: {
                "Content-Type": "application.json"
            }
        }).then((data) => data)
        .then(cases => dispatch({type: covidActionType.GET_TOTAL_CASES, data: cases.data}))
    }
}

export const setItemsLoading = () => {
    return {
        type: covidActionType.ITEMS_LOADING
    }
}