'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/offline';
import { Button } from 'antd';
//import './index.less';

class Offline extends React.Component {

    constructor(props) {

        super(props);
        //this.state = {
        //};
    }

    handleClick() {

        var { dispatch,  offline} = this.props;
        dispatch(actions.addText(`文本${offline.list.length + 1}`));
    }

    render() {

        var { list } = this.props.offline;

        return (
            <div className="page1-component">
                <p>
                    <Button onClick={this.handleClick.bind(this)} >添加文本</Button>
                </p>
                <p>
                    {list.map( (item, index ) => {
                        return <span className="result" key={index}>{item}</span>;
                    })}
                </p>
            </div>
        );
    }
}


export default connect((state)=>{
    return {
        offline: state.offline
    }
})(Offline);
