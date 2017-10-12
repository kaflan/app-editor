import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import mock from '../mock/mock';
import {Link, Route, Switch, Redirect } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Editor from '../Editor/Editor';
import List from '../PostList/List';


class Navigation extends Component {

  componentDidMount () {}
  render () {
    // const ListMock = mock.map((el) => (<li>el.header</li>));
    return (
      <div>
        <Menu
          mode="horizontal"
        >
          <Menu.Item key="list">
            <Link to="/list"><Icon type="bars"></Icon>List</Link>
          </Menu.Item>
          <Menu.Item key="book">
            <Link to="/write_post"><Icon type="book"> </Icon>Write post</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/list" exact component={List} />
          <Route path="/write_post" component={Editor} />
          <Redirect from="/" exact to="/list" />
        </Switch>
      </div>
    );
  }

}
export default Navigation;

