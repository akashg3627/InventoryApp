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
  Thumbnail,
  H2,
  H3,
} from 'native-base';

import { GROUPS } from '../data/dummy-data';

const GroupListScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon
              onPress={() => {
                navigation.openDrawer();
              }}
              name='menu'
            />
          </Button>
        </Left>
        <Body>
          <Title>Groups</Title>
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
        <List>
          {GROUPS.map((group) => (
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
      </Content>
    </Container>
  );
};

export default GroupListScreen;
