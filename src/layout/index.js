'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Menu, Dropdown, Icon } from 'antd';
import './index.less';

//引用c中的header和leftSideMenu
import Header from '../components/header/';

class Layout extends React.Component {
    render () {
        return (
            <div className="main container">
                <Header/>
                <div className="main-content">
                    <div className="left-menu">
                        <Menu mode="inline" theme="light" >
                            <Menu.Item key="sub1">
                                <Link to="/city">城市管理</Link>
                            </Menu.Item>
                            <Menu.Item key="sub2">
                                <Link to="/school">学区管理</Link>
                            </Menu.Item>
                            <Menu.Item key="sub3">
                                <Link to="/community">小区管理</Link>
                            </Menu.Item>
                            <Menu.SubMenu key="sub4" title="房源管理">
                                <Menu.Item>
                                    <Link to="/online">在线房源</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="/offline">下架房源</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="/audit">待审核房源</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="/audited">审核未通过</Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="sub5" title="用户管理">
                                <Menu.Item>
                                    <Link to="/user">平台用户管理</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="/agent">经纪人管理</Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </div>
                    <div className="right-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;
