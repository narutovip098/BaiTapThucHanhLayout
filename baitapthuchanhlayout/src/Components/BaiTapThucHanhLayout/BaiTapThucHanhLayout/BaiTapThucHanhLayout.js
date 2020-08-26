import React, { Component } from 'react'
import BT3Header from './BT3Header'
import BT3Carousel from './BT3Carousel'
import BT3ProductList from './BT3ProductList'
import BT3Footer from './BT3Footer'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BT3Header></BT3Header>
                <div className="container">
                    <BT3Carousel />
                    <BT3ProductList />
                    <BT3Footer />
                </div>    
            </div>
        )
    }
}
