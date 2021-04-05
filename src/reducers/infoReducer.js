import {SUBMIT_INFO} from '../actions/types';
import {CREATE_ROOM} from '../actions/types';

const initialState = {
    memberInfo : {},
    // totalMembers : [],
    totalRooms : []
}

export default function(state = initialState, action){

    switch (action.type) {
        case 'SUBMIT_INFO':
          return {
            ...state,
            memberInfo : {
            name : action.name,
            email : action.email}
          } 
        case 'CREATE_ROOM':
          return 
        default:
          return state
        }

    }