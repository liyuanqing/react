'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/school';
import {Button, Input, Form, Checkbox, Table, Icon ,Dialog} from 'antd';
import './index.less';
import { Link } from 'react-router';

class School extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initvalue:""
    }
    this.innercolumns = [{
      title: '学校名称',
      dataIndex: 'cityName',
      key: 'cityName',
    }, {
      title: '城市区县',
      dataIndex: 'featureList',
      key: 'featureList',
    },
    {
      title: '阶段',
      dataIndex: 'plate',
      key: 'plate',
    },
    {
      title: '类型',
      dataIndex: 'counter',
      key: 'counter',
    },
    {
      title: '关联小区',
      dataIndex: 'subway',
      key: 'subway',
    },
    {
      title: '添加日期',
      dataIndex: 'cityOpenedDate',
      key: 'cityOpenedDate',
    },
    {
      title: '操作',
      key: 'operation',
      render: this.operationRender.bind(this)
    }];
    }
    operationRender(text, record) {
        return <span>
              <Button type="link">关联小区</Button>
              <Button type="link">编辑</Button>
              <Button type="link" className="enableFalse" title="非创建人，不能删除">删除</Button>
               </span>;
    }
    componentDidMount(){
         var { dispatch, school, layout} = this.props;
         //var poiId=layout.selectPoi;
         dispatch(actions.getSchoolList());
    }
    render() {
        var { dispatch, school } = this.props;
        return (
            <div className="home-page">
            {/*<div className="content-header">
              <div className="total_l">人群管理</div>
              <div className="total_r"> <Link className="sui-btn" to="/crowdadd">创建人群</Link> </div>
            </div>*/}
            <div className="content-search">
              <Form inline>
                  <Form.Item >
                      <Input value={this.state.initvalue}  placeholder="城市搜索" />
                  </Form.Item>
                  <Button type="primary" >添加城市</Button>
              </Form>
              </div>
              <div className="content">
              <Table dataSource={school.list} columns={this.innercolumns} />
            </div>

          </div>
        );
    }
}


export default connect((state)=>{
    return {
        school: state.school
    }
})(School);
