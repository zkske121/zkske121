import React, { Component } from "react";
import { connect } from "react-redux";
import { countAddAction } from '../actions/countAction';
import { Button } from 'antd-mobile';

class Count extends Component {
    render() {
        const { count, countAddAction } = this.props;

        return (
            <div>
                {count}
                <Button onClick={countAddAction}>add</Button>
            </div>
        );
    }
}


export default connect(
    (state) => ({
        count: state.count
    }),
    {
        countAddAction
    }
)(Count);