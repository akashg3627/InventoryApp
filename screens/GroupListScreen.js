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
} from 'native-base';

const GroupListScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
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
          <ListItem selected>
            <Left>
              <Text>Simon Mignolet</Text>
            </Left>
            <Right>
              <Icon name='arrow-forward' />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Nathaniel Clyne</Text>
            </Left>
            <Right>
              <Icon name='arrow-forward' />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Dejan Lovren</Text>
            </Left>
            <Right>
              <Icon name='arrow-forward' />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default GroupListScreen;
