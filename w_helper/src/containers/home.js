import React, { Component } from "react";
import { connect } from "react-redux";
import { countAddAction } from '../actions/countAction';
import { Button, TabBar } from 'antd-mobile';
import OptionView from '../views/OptionView';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabList: [<OptionView />],
            selectIndex: 0
        }
    }

    onSelectChange = (selectIndex) => {
        this.setState({ selectIndex });
    }

    renderTabList = () => {
        const { tabList, selectIndex } = this.state;
        const { count, countAddAction } = this.props;

        return tabList.map((v, i) => {
            return (
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="My"
                    key={`tab_${i}`}
                    selected={selectIndex === i}
                    onPress={() => {
                        this.onSelectChange(i);
                    }}
                >
                    {v}
                </TabBar.Item>
            );
        });
    }

    render() {
        return (
            <div>
                <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={false}
                        tabBarPosition="bottom"
                        prerenderingSiblingsNumber={1}
                    >
                        {this.renderTabList()}
                    </TabBar>
                </div>
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
)(Home);