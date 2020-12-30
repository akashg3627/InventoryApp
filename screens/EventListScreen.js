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
} from 'native-base';

const EventListScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Events</Title>
        </Body>
        <Right />
      </Header>
      <Content
        padder
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          onPress={() => {
            navigation.navigate('InventoryList');
          }}
          bordered
        >
          <Text>INVENTORY</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default EventListScreen;
