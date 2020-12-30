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

const InventoryListScreen = () => {
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
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onPress={() => {}} bordered>
          <Text>View Inventory</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default InventoryListScreen;
