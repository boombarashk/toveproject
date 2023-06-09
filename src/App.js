import React, {useEffect} from "react";
import {Outlet} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {fetchDataRequest, fetchDataSuccess} from "./store/actions/request";
import {getFromLocalStorage, STORAGE_ITEM_NAME} from "./storage";

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataRequest({
            url: '../moomin.json',
            key: 'chapters'
        }));
    }, [dispatch]);

    useEffect(() => {
        const user = getFromLocalStorage(STORAGE_ITEM_NAME)
        if (user) {
            dispatch(fetchDataSuccess({user, key: 'user'}))
        }
    }, []);

    return <>
        <Outlet />
    </>
}
