import {
  LIST_INVENTORY_COLLECTIONS,
  ADD_INVENTORY_COLLECTION,
  DELETE_INVENTORY_COLLECTION,
  UPDATE_INVENTORY_COLLECTION,
} from '../constants/inventory';

const initialState = {
  collections: [],
};

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_INVENTORY_COLLECTIONS:
    case ADD_INVENTORY_COLLECTION:
    case DELETE_INVENTORY_COLLECTION:
    case UPDATE_INVENTORY_COLLECTION:
    default:
      return state;
  }
};

export default inventoryReducer;
