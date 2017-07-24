'use strict';

import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import './index.less';

const SiteMenu = <Menu>
    <Menu.Item key="site-1">
        <a target="_blank" href="">应用规则</a>
    </Menu.Item>
    <Menu.Item key="site-2">
        <a target="_blank" href="">商品规则</a>
    </Menu.Item>
</Menu>;

class Header extends React.Component {
    render() {
        return (
            <div className="header-component">
                <div className="sitenav">
                    <h3>二手房管理平台</h3>
                    <ul>
                        <li>记录</li>
                        <li>
                            <Dropdown overlay={SiteMenu}>
                                <span>
                                    <span >规则</span>
                                    <Icon type="down" />
                                </span>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
