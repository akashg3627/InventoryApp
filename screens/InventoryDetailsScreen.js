import React from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Content,
  Text,
  List,
  ListItem,
  Card,
  CardItem,
} from 'native-base';

import { INVENTORY } from '../data/dummy-data';

const InventoryDetailsScreen = ({ route }) => {
  const { inventory_collection_ID } = route.params;

  const collectionData = INVENTORY.find((data) => {
    return data.inventory_collection_ID === inventory_collection_ID;
  });
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Inventory Details</Title>
        </Body>
        <Right />
      </Header>
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
