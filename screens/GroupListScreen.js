import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
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
  Thumbnail,
  H3,
  Spinner,
} from 'native-base';

import CustomHeader from '../components/CustomHeader';
import { listGroups } from '../store/actions/groups';
import colors from '../constants/colors';
import { GROUPS } from '../data/dummy-data';

const GroupListScreen = ({ navigation }) => {
  const { groups } = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listGroups(GROUPS));
  }, [dispatch, listGroups]);

  return (
    <Container>
      <CustomHeader headerTitle='Groups' navigation={navigation} />

      <Content padder>
        {groups.length === 0 ? (
          <Spinner color={colors.primary} />
        ) : (
          <List>
            {groups.map((group) => (
              <ListItem
                key={group.group_ID}
                thumbnail
                onPress={() => {
                  navigation.navigate('InventoryList', {
                    group_ID: group.group_ID,
                  });
                }}
              >
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri: group.group_icon,
                    }}
                  />
                </Left>
                <Body>
                  <H3>{group.group_name}</H3>
                  {/* <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text> */}
                </Body>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </ListItem>
            ))}
          </List>
        )}
      </Content>
    </Container>
  );
};

export default GroupListScreen;
