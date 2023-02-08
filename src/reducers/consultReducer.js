import { BEGIN_CONSULT_API, CONSULT_API_ERROR, CONSULT_API_SUCCESS } from "../types";

const initialState = {
    results: [],
    error: '',
    loading: false
}


export default function (state = initialState, action ) {
    switch( action.type ) {
        case BEGIN_CONSULT_API:
            return {
                ...state,
                loading: true
            }
        case CONSULT_API_SUCCESS:
            return {
                ...state,
                results: action.payload,
                error: ''
            }
        case CONSULT_API_ERROR:
            return {
                ...state,
                results: [],
                error: action.payload
            }
        default:
            return state;
            
    }
}