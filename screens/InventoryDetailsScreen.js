import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Body, Text, List, ListItem, Spinner } from 'native-base';

import CustomHeader from '../components/CustomHeader';
import { INVENTORY } from '../data/dummy-data';
import { listCollectionDetails } from '../store/actions/inventory';
import colors from '../constants/colors';

const InventoryDetailsScreen = ({ route, navigation }) => {
  const { inventory_collection_ID } = route.params;

  const { collection_Items } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCollectionDetails(INVENTORY, inventory_collection_ID));
  }, [dispatch, listCollectionDetails]);

  return (
    <Container>
      <CustomHeader headerTitle='Details' navigation={navigation} />
      {collection_Items.length === 0 ? (
        <Spinner color={colors.primary} />
      ) : (
        <Body>
          <Text> {collection_Items.inventory_collection_name}</Text>
          <List>
            {collection_Items.map((item) => (
              <ListItem>
                <Text>{item.item_name}</Text>
              </ListItem>
            ))}
          </List>
        </Body>
      )}
    </Container>
  );
};

export default InventoryDetailsScreen;
