'use strict';
import React from 'react';
import {
    connect
} from 'react-redux';
import * as actions from '../../actions/demo/demo';
import {
    Form,
    Breadcrumb,
    Table,
    Input,
    Button,
    Card,Cascader,Row,Col,Select,Modal,Popconfirm,TreeSelect, Upload, Icon,message ,Radio
} from 'antd';
import {
    Link
} from 'react-router';

class demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {

        return (
            <div className="page-content">
            <Breadcrumb separator="/">
            <Breadcrumb.Item>权限管理</Breadcrumb.Item>
              <Breadcrumb.Item>demo管理</Breadcrumb.Item>
            </Breadcrumb>
            <Card>

        </Card>
        <Card className="mt1">
            <span className="mr1" ><Button type="primary"><Icon type="plus" />新增</Button></span>
        </Card>

            </div>
    )
    }
}
// demo = createForm()(demo);
export default connect(state => {
    return {
        demo: state.demo
    }
})(demo);
