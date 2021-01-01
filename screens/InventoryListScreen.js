import React, { useState, useEffect } from 'react';
import { Container, Body, Content, Text, Card, CardItem } from 'native-base';

import { INVENTORY } from '../data/dummy-data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';

const InventoryListScreen = ({ route, navigation }) => {
  const { group_ID } = route.params;
  const groupInventory = INVENTORY.filter((item) => {
    return item.group_ID === group_ID;
  });

  return (
    <Container>
      <CustomHeader headerTitle='Inventory' navigation={navigation} />

      <Content padder>
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
