import React from 'react'
import { Button } from 'antd'
import { ShoppingFilled, HeartFilled} from '@ant-design/icons';
import './Cakes.css'


function Bags(props) {

    return (
        <div className="outerDiv">
            {props.bags.map((el, index) => <div className="itemCard" key={index + 1}>
                <div className="cardTop">
                    <img src={el.image} />
                    <div className="itemTitle">{el.title}</div>
                </div>
                <div className="cardBottom">
                    <div>${el.price}</div>
                    <div className="cardDivRight">
                        <Button icon={<HeartFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} onClick={() => props.newFav(index)}></Button>
                        <Button icon={<ShoppingFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} onClick={() => props.newCheckOut(index)}></Button>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Bags
