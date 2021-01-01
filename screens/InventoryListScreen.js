import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content, Text, List, ListItem, Spinner } from 'native-base';

import { StyleSheet, Dimensions } from 'react-native';

import { INVENTORY } from '../data/dummy-data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';
import colors from '../constants/colors';

import { listInventoryCollections } from '../store/actions/inventory';

const InventoryListScreen = ({ route, navigation }) => {
  const { group_ID } = route.params;

  const { inventory } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listInventoryCollections(INVENTORY, group_ID));
  }, [dispatch, listInventoryCollections]);

  return (
    <Container>
      <CustomHeader headerTitle='Inventory' navigation={navigation} />
      <Content padder>
        {inventory.length === 0 ? (
          <Spinner color={colors.primary} />
        ) : (
          <List>
            {inventory.map((collection) => {
              return (
                <ListItem
                  key={collection.inventory_collection_ID}
                  onPress={() => {
                    navigation.navigate('InventoryDetails', {
                      inventory_collection_ID:
                        collection.inventory_collection_ID,
                    });
                  }}
                >
                  <Text style={styles.listItemText}>
                    {collection.inventory_collection_name}
                  </Text>
                </ListItem>
              );
            })}
          </List>
        )}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  listItem: {
    width: Dimensions.get('window').width / 2.5,
    height: 100,
    backgroundColor: colors.primary,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default InventoryListScreen;
