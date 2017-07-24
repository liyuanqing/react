'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/city';
import {Button, Input, Form, Checkbox, Table, Icon ,Dialog} from 'antd';
import './index.less';
import { Link } from 'react-router';
//const confirm = Dialog.confirm;
const error = function() {
  Toast.error('请填写人群名称！');
};
class City extends React.Component {
  constructor(props) {
		super(props);
    this.state = {
      initvalue:""
    }
    this.innercolumns = [{
		  title: '城市名称',
		  dataIndex: 'cityName',
		  key: 'cityName',
		}, {
		  title: '房源特色',
		  dataIndex: 'featureList',
		  key: 'featureList',
		},
		{
		  title: '板块',
		  dataIndex: 'plate',
		  key: 'plate',
		},
		{
		  title: '上架房源',
		  dataIndex: 'counter',
		  key: 'counter',
		},
		{
		  title: '地铁线',
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
  		if(record.enable){
  			return <span>
  						<Button type="link">特色管理</Button>
  						<Button type="link">地铁站点</Button>
  			      </span>;
  		}else{
  			return <span>
  						<Button type="link">特色管理</Button>
  						<Button type="link" className="enableFalse" title="非创建人，不能删除">地铁站点</Button>
  			       </span>;
  		}

  	}
    componentDidMount(){
         var { dispatch, city, layout} = this.props;
         //var poiId=layout.selectPoi;
         dispatch(actions.getCityList());
  	}
    render() {
        var { dispatch, city } = this.props;
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
						  <Table dataSource={city.list} columns={this.innercolumns} />
		        </div>

         	</div>
        );
    }
}

export default connect((state)=>{
    return {
        city:state.city,
        layout: state.layout
    }
})(City);
