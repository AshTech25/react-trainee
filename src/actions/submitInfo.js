import {SUBMIT_INFO} from './types';
import {CREATE_ROOM} from './types';

export const fetchInfo = (userName,email) => dispatch => {
    dispatch({
        type : SUBMIT_INFO,
        name : userName ,
        email  
    })
}
