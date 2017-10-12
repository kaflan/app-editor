import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import {connect} from 'react-redux';

class DropDownMenu extends Component {

  render () {
    return (
      <Menu  style={{
        boxShadow: '0 0 10px rgba(0,0,0,0.5)'
      }}>
        <Menu.Item key="0"
        >
          Delete Item
          <Icon
            type="delete"
            className="icon-list__action"
          >
          </Icon>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1"
        >
          Edit Item &emsp;
          <Icon
            type="edit"
            className="icon-list__action"
          >
          </Icon>
        </Menu.Item>
        <Menu.Divider />


      </Menu>
    );
  }
}

export default connect(null,null,null)(DropDownMenu);