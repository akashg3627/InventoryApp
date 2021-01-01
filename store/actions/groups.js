import {
  LIST_GROUPS,
  ADD_GROUP,
  DELETE_GROUP,
  UPDATE_GROUP,
} from '../constants/groups';

export const listGroups = (data) => {
  return (dispatch) => {
    dispatch({
      type: LIST_GROUPS,
      data,
    });
  };
};

export const addGroup = () => {};
export const deleteGroup = () => {};
export const updateGroup = () => {};
