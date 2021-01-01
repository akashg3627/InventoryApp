import {
  LIST_GROUPS,
  ADD_GROUP,
  DELETE_GROUP,
  UPDATE_GROUP,
} from '../constants/groups';

const initialState = {
  groups: [],
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_GROUPS:
      return {
        groups: action.data,
      };
    case ADD_GROUP:
    case DELETE_GROUP:
    case UPDATE_GROUP:
    default:
      return state;
  }
};

export default groupsReducer;
