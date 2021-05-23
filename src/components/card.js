import React from 'react'
import './card.css'
const card = (props) => {
    return (
        <div className="card-cont">
            <img src={props.img} className="shop-img" alt={ props.name}/>
            <div className="details">
                <h3>Shop Name:{props.name}</h3>
                <h3>Description:{props.discription}</h3>
            </div>
        </div>
    )
}

export default card
