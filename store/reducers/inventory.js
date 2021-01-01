import {
  LIST_INVENTORY_COLLECTIONS,
  ADD_INVENTORY_COLLECTION,
  DELETE_INVENTORY_COLLECTION,
  UPDATE_INVENTORY_COLLECTION,
  LIST_INVENTORY_COLLECTION_DETAILS,
} from '../constants/inventory';

const initialState = {
  inventory: [],
  collection_Items: [],
};

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_INVENTORY_COLLECTIONS:
      return {
        ...state,
        inventory: action.data,
      };
    case LIST_INVENTORY_COLLECTION_DETAILS:
      return {
        ...state,
        collection_Items: action.data,
      };
    case ADD_INVENTORY_COLLECTION:
    case DELETE_INVENTORY_COLLECTION:
    case UPDATE_INVENTORY_COLLECTION:
    default:
      return state;
  }
};

export default inventoryReducer;
