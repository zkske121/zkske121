import React, { Component } from "react";
import { Tag, Flex, Card } from 'antd-mobile';
import { SelectedUser, UserList, Casting } from '../components';

export default class OptionView extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <SelectedUser />
                <Casting />
                <UserList />
            </div>
        );
    }
}