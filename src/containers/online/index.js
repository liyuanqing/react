'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/online';
import {Button, Input, Form, Checkbox, Table, Icon ,Dialog} from 'antd';
import './index.less';
import { Link } from 'react-router';
class Online extends React.Component {
  componentDidMount(){
       var { dispatch, online} = this.props;
       //var poiId=layout.selectPoi;
       //dispatch(actions.test());
  }

    render() {
        var { dispatch, online} = this.props;

        return (
            <div>
              {online.list}
            </div>
        );
    }
}


export default connect((state)=>{
    return {
        online: state.online
    }
})(Online);
