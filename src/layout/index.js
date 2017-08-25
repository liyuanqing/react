'use strict';

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Menu, Dropdown, Icon, Badge, Row, Col } from 'antd';
import './index.less';
import Header from '../components/header/';
var selected = '1';
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    golink() {
      var name=""
      var token=""
      document.cookie.split(';').map((value, index) => {
        if (value.substring(0, value.indexOf('=')).trim() == 'zusername') {
          name = unescape(value.substring(value.indexOf('=') + 1));
        } else if (value.substring(0, value.indexOf('=')).trim() == 'ztoken') {
          token = value.substring(value.indexOf('=') + 1);
        }
      })
      var link="http://admin.elive99.com/?appname="+name+"&appid="+token
        window.open(link)
        // window.location.href="http://www.baidu.com"
    }
    render() {
        switch (this.props.location.pathname) {
            case '/serveManager':
                selected = '1';
                break;
            case '/communityManagerAdd':
            case '/communityManagerEdit':
            case '/communityManager':
                selected = '2';
                break;
            case '/estateCompanyUpdate':
            case '/estateCompanyAdd':
            case '/estateCompanyManager':
                selected = '3';
                break;
            default:
                selected = '2';
                break;
        }
        return (
            <div className="main">
                <Header />
                <div className="main-wrapper">
                    <Row>
                        <Col lg={3} md={5} sm={7} xs={24} className="left-menu">
                            <Menu mode="inline"
                                theme="light"
                                defaultOpenKeys={['memberManager']}
                                selectedKeys={[selected]}>
                                <Menu.SubMenu key="memberManager" title={<span><Icon type="solution" /><span>企业管理</span></span>}>
                                    <Menu.Item key="2">
                                        <Link to="/communityManager">小区管理</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link to="/estateCompanyManager">企业管理</Link>
                                    </Menu.Item>
                                </Menu.SubMenu>
                            </Menu>
                        </Col>
                        <Col lg={21} md={19} sm={17} xs={24} className="right-content">
                            <div className="right-content-container">
                                {this.props.children}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Layout;
