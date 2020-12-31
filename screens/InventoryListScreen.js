import React, { useState, useEffect } from 'react';
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
import { TouchableOpacity } from 'react-native-gesture-handler';

const InventoryListScreen = ({ route, navigation }) => {
  const { group_ID } = route.params;
  //let [groupInventory, setGroupInventory] = useState([]);

  // useEffect(() => {
  //   const inventory = INVENTORY.filter((item) => {
  //     return item.group_ID !== group_ID;
  //   });

  //   setGroupInventory(INVENTORY);

  //   console.log(groupInventory);
  // }, [groupInventory, group_ID]);
  const groupInventory = INVENTORY.filter((item) => {
    return item.group_ID === group_ID;
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
          <Title>Inventory</Title>
        </Body>
        <Right />
      </Header>
      <Content
        padder
        // contentContainerStyle={{
        //   flexDirection: 'row',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        // }}
      >
        {/* <List>
          {groupInventory.map((collection) => (
            <ListItem key={collection.inventory_collection_ID}>
              <Left>
                <Text>{collection.inventory_collection_name}</Text>
              </Left>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
          ))}
        </List> */}

        {groupInventory.map((collection) => (
          <TouchableOpacity
            activeOpacity={0.6}
            key={collection.inventory_collection_ID}
            onPress={() => {
              navigation.navigate('InventoryDetails', {
                inventory_collection_ID: collection.inventory_collection_ID,
              });
            }}
          >
            <Card>
              <CardItem>
                <Body>
                  <Text>{collection.inventory_collection_name}</Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
        ))}
      </Content>
    </Container>
  );
};

export default InventoryListScreen;
