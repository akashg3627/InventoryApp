import {
  LIST_INVENTORY_COLLECTIONS,
  LIST_INVENTORY_COLLECTION_DETAILS,
  ADD_INVENTORY_COLLECTION,
  DELETE_INVENTORY_COLLECTION,
  UPDATE_INVENTORY_COLLECTION,
} from '../constants/inventory';

export const listInventoryCollections = (data, group_ID) => {
  return (dispatch) => {
    const collections = data.filter((item) => {
      return item.group_ID === group_ID;
    });

    dispatch({
      type: LIST_INVENTORY_COLLECTIONS,
      data: collections,
    });
  };
};

export const listCollectionDetails = (data, collection_ID) => {
  const collectionData = data.find((data) => {
    return data.inventory_collection_ID === collection_ID;
  });

  return (dispatch) => {
    dispatch({
      type: LIST_INVENTORY_COLLECTION_DETAILS,
      data: collectionData.inventory_collection_items,
    });
  };
};
