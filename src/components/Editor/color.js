import React from 'react';
import { Menu } from 'antd';

const colors = [
  '#000000',
  '#15E67F',
  '#E3DE8C',
  '#D8A076',
  '#D83762',
  '#76B6D8',
  '#1C7A90',
  '#249CB8',
  '#4ABED9',
  '#FBD75B',
  '#FBE571',
  '#FFFFFF'];
const ColoredMenu = (props) => {
  // debugger
  return <Menu
    className="row justify-content-between"
    onClick={props.pickColor}
    >
    {colors.map((element) =>
      <Menu.Item
        className="col-2"
        key={element}
        style={{
          color: element,
          backgroundColor: element,
          border: '1px solid black'
        }}
      >
        {element}
      </Menu.Item>
    )}
  </Menu>
};
export default ColoredMenu;