import {
    asyncFetchSuccess,
    asyncFetchFailed,
} from './actions'

import { fetchURI } from '../config/constants'
import fetch from 'isomorphic-fetch'

export const asyncAction = () => {
    return (dispatch) => {
        fetch(fetchURI)
            .then(response => response.json())
            .then(data => {
                dispatch(asyncFetchSuccess(data));
            })
            .catch(err => {
                dispatch(asyncFetchFailed(err));
            });
    }
};