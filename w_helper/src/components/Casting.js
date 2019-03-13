import React, { Component } from "react";
import { Tag, Button, Flex } from 'antd-mobile';
import CardItemContainer from './CardItemContainer';

export default class Casting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roleList: new Array(10).join('-').split('-').map((v, i) => i)
        }
    }

    onCasting = (i) => () => {
        const { selectedUserList } = this.state;

        this.setState(selectedUserList);
    }

    renderRoleList = () => {
        const { roleList } = this.state;

        return roleList.map((role, i) => {
            return (
                <Button className="margin_5" onClick={this.onCasting(i)} size="small" style={{ width: '50px'}}>
                    {role}
                </Button>
            );
        });
    }

    render() {
        return (
            <CardItemContainer title={'已勾选'} type={1}>
                <Flex wrap="wrap">
                    {this.renderRoleList()}
                </Flex>
            </CardItemContainer>
        );
    }
}