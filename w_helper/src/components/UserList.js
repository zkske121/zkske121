import React, { Component } from "react";
import { Grid, Flex } from 'antd-mobile';

export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: new Array(12).join('-').split('-').map((v, i) => ({
                icon: 'icon',
                text: v + i
            }))
        }
    }

    onClick = (el, index) => {
        alert(index);
    }

    renderItem = (dataItem) => {
        return (
            <div style={{ padding: '5px' }}>
                <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                    <span>{dataItem.text}</span>
                </div>
            </div>
        );
    }

    render() {
        const {userList} = this.state;

        return (
            <Grid
                data={userList}
                onClick={this.onClick}
                columnNum={userList.length > 9 ? 4 : 3}
                renderItem={this.renderItem}
            />
        );
    }
}