import { covidActionType } from '../action/covidActions';

const covidInitialState = {
    allPatients:[],
    allCases:{},
    loading: false
}

export default( state = covidInitialState, action) => {
    switch(action.type){
        case covidActionType.GET_ALL_PATIENTS:
            return{
                ...state,
                allPatients: action.data,
                loading: false
            }
        case covidActionType.GET_TOTAL_CASES:
            return{
                ...state,
                allCases: action.data,
                loading: false
            }
        case covidActionType.ITEMS_LOADING:
            return{
                ...state,
                loading: true
            }
        default: 
            return state;
    }
}