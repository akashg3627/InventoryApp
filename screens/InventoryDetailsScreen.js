import React from 'react';
import { Container, Body, Text, List, ListItem } from 'native-base';

import CustomHeader from '../components/CustomHeader';

import { INVENTORY } from '../data/dummy-data';

const InventoryDetailsScreen = ({ route, navigation }) => {
  const { inventory_collection_ID } = route.params;

  const collectionData = INVENTORY.find((data) => {
    return data.inventory_collection_ID === inventory_collection_ID;
  });
  return (
    <Container>
      <CustomHeader headerTitle='Details' navigation={navigation} />

      <Body>
        <Text> {collectionData.inventory_collection_name}</Text>
        <List>
          {collectionData.inventory_collection_items.map((item) => (
            <ListItem>
              <Text>{item.item_name}</Text>
            </ListItem>
          ))}
        </List>
      </Body>
    </Container>
  );
};

export default InventoryDetailsScreen;
