import React, { Component } from "react";
import { Flex } from 'antd-mobile';

export default function ({ children, title, type }) {
    return (
        <div className="card_item_container">
            {
                type === 1
                ? renderContentStyle({ children, title })
                : renderLineStyle({ children, title })
            }
        </div>
    );
}

function renderLineStyle({ children, title }) {
    return (
        <Flex justify="start">
            <div className="font_weight_bold">
                {title}：
            </div>
            <Flex.Item>
                {children}
            </Flex.Item>
        </Flex>
    );
}

function renderContentStyle({ children, title }) {
    return (
        <div>
            <div style={{ textAlign: 'left', margin: '0 0 5px 10px'}}>
                {title}
            </div>
            <Flex>
                {children}
            </Flex>
        </div>
    );
}

