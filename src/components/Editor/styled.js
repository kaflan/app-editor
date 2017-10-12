import React from 'react';
import {Dropdown, Button, Icon} from 'antd';
import coloredMenu from './color';

export default class StyleButton extends React.Component {
  onToggle (e) {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  };
  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += 'RichEditor-activeButton';
    }
    if (this.props.label === 'Color') {
      return (
        <Dropdown
          overlay={coloredMenu(this.props)}
          pickColor={this.props.pickColor}
        >
          <Button style={{ marginLeft: 8 }}>
            Pick text color <Icon type="down" />
          </Button>
        </Dropdown>
      );
    }
    return (
      <span className={className} onMouseDown={(e)=>this.onToggle(e)}>
              {this.props.label}
            </span>
    );
  }
}