import React, { Component } from 'react'
import { Button } from 'antd'
import { ShoppingFilled, HeartFilled } from '@ant-design/icons';
import './Cakes.css'
import axios from 'axios'

class Cakes extends Component {

    render() {
        return (
            <div className="outerDiv">
                {this.props.cakes.map((el, index) => <div className="itemCard" key={index + 1}>
                    <div className="cardTop">
                        <img src={el.image} />
                        <div className="itemTitle">{el.title}</div>
                    </div>
                    <div className="cardBottom">
                        <div>${el.price}</div>
                        <div className="cardDivRight">
                            <Button icon={<HeartFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} onClick={() => this.props.newFav(index)}></Button>
                            <Button icon={<ShoppingFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} onClick={() => this.props.newCheckOut(index)}></Button>
                        </div>
                    </div>
                </div>)}
            </div>
        )
    }


}

export default Cakes
