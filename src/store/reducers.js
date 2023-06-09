import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS} from "./actions/request";

const initialState = {
    user: null,
    chapters: [],
    loading: false,
    error: null
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                [action.payload.key]: action.payload.data,
                loading: false,
                error: null
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducers;
