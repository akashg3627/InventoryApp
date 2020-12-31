import Groups from '../models/Groups';
import Inventory from '../models/Inventory';

const GROUPS = [
  new Groups(
    'fsfdbfsdbfhj',
    ['Anmol', 'Miten'],
    'The Programming Club',
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
  ),
  new Groups(
    'eurwfdfsdiwef',
    ['Akhil', 'Nishit'],
    'CFA',
    'https://thumbs.dreamstime.com/b/transaction-icon-vector-globe-dollar-sign-currency-money-male-person-profile-avatar-symbol-business-network-flat-196636197.jpg'
  ),
  new Groups(
    '23423rnweffd',
    ['Shivam'],
    'Aeromodeling',
    'https://cdn1.iconfinder.com/data/icons/circle-outlines-colored/512/Robot_User_Profile_Dummy_Avatar_Person_AI-512.png'
  ),
  new Groups(
    'r4rewhbrwehf',
    ['Raghav'],
    'Robotics',
    'https://www.pngfind.com/pngs/m/140-1400144_robotics-icon-robot-arm-icon-png-transparent-png.png'
  ),
  new Groups(
    '4191fhdfjbsjf',
    ['Tarun', 'Aryan'],
    'Cynaptics',
    'https://media-exp1.licdn.com/dms/image/C510BAQFbp4mBzmTaFw/company-logo_200_200/0/1582205319278?e=2159024400&v=beta&t=d1rBiSU3QBIiJWJB8t7mx2sDU2R1J2ZxzQiB9qYOIS4'
  ),
];

const INVENTORY = [
  new Inventory(
    'fsfdbfsdbfhj',
    Math.random(),
    'Euristica stuff',
    [
      {
        item_name: 'graphic card',
        item_image:
          'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        item_name: 'laptop',
        item_image:
          'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      {
        item_name: 'server',
        item_image:
          'https://images.unsplash.com/photo-1560732488-6b0df240254a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
    ],
    new Date().getTime().toString(),
    true,
    'To be used in upcoming Euristca-21'
  ),
  new Inventory(
    'eurwfdfsdiwef',
    Math.random(),
    'CFA workshop Stuff',
    [
      {
        item_name: 'charts',
        item_image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        item_name: 'stencils',
        item_image:
          'https://images.unsplash.com/photo-1526597796581-efa2fc6087ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        item_name: 'calculator',
        item_image:
          'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80',
      },
    ],
    new Date().getTime().toString(),
    false,
    'For holding CFA workshop for first years'
  ),
  new Inventory(
    '23423rnweffd',
    Math.random(),
    'Techfest remote Items',
    [
      {
        item_name: 'dummy plane model',
        item_image:
          'https://images.unsplash.com/photo-1484848016494-33ad4fc7feef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        item_name: 'quadcopter',
        item_image:
          'https://images.unsplash.com/photo-1456615913800-c33540eac399?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        item_name: 'aurdino board',
        item_image:
          'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/500x375/f8876a31b63532bbba4e781c30024a0a/a/0/a000066_front_8.jpg',
      },
    ],
    new Date().getTime().toString(),
    true,
    'For making demo plane model for intra iit'
  ),
  new Inventory(
    'r4rewhbrwehf',
    Math.random(),
    'Robo Fest Stuff',
    [
      {
        item_name: 'camera',
        item_image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      },
      {
        item_name: 'stencils',
        item_image:
          'https://images.unsplash.com/photo-1526597796581-efa2fc6087ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        item_name: 'stationary',
        item_image:
          'https://images.unsplash.com/photo-1471256737566-c7ddd846bee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
    ],
    new Date().getTime().toString(),
    true,
    'This stuff is to be used in the upcoming Indian Robo Festival 2021'
  ),
  new Inventory(
    '4191fhdfjbsjf',
    Math.random(),
    'Cyber AI stuff',
    [
      {
        item_name: 'graphic card',
        item_image:
          'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        item_name: 'laptop',
        item_image:
          'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      {
        item_name: 'server',
        item_image:
          'https://images.unsplash.com/photo-1560732488-6b0df240254a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
    ],
    new Date().getTime().toString(),
    false,
    'For Cynaptics club open workshop'
  ),
];

export { GROUPS, INVENTORY };
