import React from 'react';
// import SideBar from './yourPathToSideBar';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Container, Content, Text, View, Thumbnail, Icon } from 'native-base';

const DrawerContent = ({ navigation }) => {
  return (
    // <Container>
    //   <Content padder>
    //     <Text>View Groups</Text>
    //     <Text>Profile</Text>
    //     <DrawerItem
    //       label='Help'
    //     />
    //   </Content>
    // </Container>
    <DrawerContentScrollView>
      {/* <DrawerItemList {...props} /> */}
      <View
        style={{
          backgroundColor: '#fff',
          margin: 10,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Thumbnail
          style={{
            padding: 50,
            alignSelf: 'center',
          }}
          square
          source={{
            uri:
              'https://dynamic.brandcrowd.com/asset/logo/e886d275-f5ba-4645-9b39-4f547b6ee125/logo?v=4',
          }}
        />
      </View>
      <DrawerItem
        label='Home'
        labelStyle={{
          fontSize: 18,
        }}
        inactiveBackgroundColor='pink'
        icon={() => <Icon color='#000' size={18} name='home' />}
        onPress={() => {
          navigation.navigate('GroupList');
        }}
      />
      <DrawerItem
        label='Profile'
        labelStyle={{
          fontSize: 18,
        }}
        inactiveBackgroundColor='pink'
        icon={() => <Icon color='#000' size={18} name='person' />}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
