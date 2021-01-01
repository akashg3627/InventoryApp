import React from 'react';
import { Header, Left, Icon, Button, Title, Body, Right } from 'native-base';

const CustomHeader = ({ headerTitle, navigation }) => {
  return (
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
        <Title>{headerTitle}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default CustomHeader;
