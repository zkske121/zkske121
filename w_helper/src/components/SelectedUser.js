import React, { Component } from "react";
import { Tag } from 'antd-mobile';
import CardItemContainer from './CardItemContainer';

export default class SelectedUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedUserList: new Array(10).join('-').split('-').map((v, i) => i)
        }
    }

    onCancelUser = (i) => () => {
        const { selectedUserList } = this.state;

        selectedUserList.splice(i, 1);
        this.setState(selectedUserList);
    }

    onClear = () => {
        this.setState({ selectedUserList: [] });
    }

    renderSelectedUserList = () => {
        const { selectedUserList } = this.state;

        return selectedUserList.map((user, i) => {
            return (
                <Tag className="margin_5" selected onChange={this.onCancelUser(i)}>
                    {user}
                </Tag>
            );
        });
    }

    render() {
        return (
            <CardItemContainer title={'已勾选'}>
                {this.renderSelectedUserList()}
                <Tag className="margin_5" onChange={this.onClear}>清除</Tag>
            </CardItemContainer>
        );
    }
}