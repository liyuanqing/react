'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/agent';
import { Button } from 'antd';
//import './index.less';

class Agent extends React.Component {

    constructor(props) {

        super(props);
        //this.state = {
        //};
    }

    handleClick() {

        var { dispatch,  agent} = this.props;
        //dispatch(actions.addText(`文本${agent.list.length + 1}`));
    }

    render() {

        var { list } = this.props.agent;

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
        agent: state.agent
    }
})(Agent);
