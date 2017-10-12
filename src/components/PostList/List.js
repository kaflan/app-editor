import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
import mock from '../mock/mock';
import { Card, Icon, Dropdown, Button } from 'antd';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';

class List extends Component {

  componentDidMount () {}
  render () {
    const ListMock = mock.map((el, i) => {
      // console.log()
      return (
        <Card
          key={`${el}${i}`}
          title={el.header}
          style={{
            marginTop: '10%',
            width: '100%'
          }}
          extra={
            <Dropdown
              overlay={ <DropDownMenu />
              }
              trigger={['click']}
            >
                <Button>
                 Actions<Icon type="down" />
                </Button>
            </Dropdown>
          }
        >
          <div dangerouslySetInnerHTML={{__html: el.text }} />
        </Card>);
    });
    // debugger
    return (
      <div className="container">
        <div className="row col-md-auto">
            {ListMock}
        </div>
      </div>
    );
  }

}
export default List;

