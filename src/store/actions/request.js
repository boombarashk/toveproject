export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = (payload) => ({
    type: FETCH_DATA_REQUEST,
    payload
});

export const fetchDataSuccess = (payload) => ({
    type: FETCH_DATA_SUCCESS,
    payload,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});
