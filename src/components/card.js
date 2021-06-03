import React from 'react'
import './card.css'
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom'
import Button from './Button';
const card = (props) => {
    return (
        <div className="card-cont">
            <img src={props.img} className="shop-img" alt={ props.name}/>
            <div className="details">
                <h3>Shop Name:{props.name}</h3>
                <h5>Address:    {props.description}</h5>
               <span> Rating  <StarRatings
                    rating={4}
          starRatedColor="yellow"
            starDimension="20px"
        starSpacing="5px"
          numberOfStars={5}
          name='rating'
                />
                   
                </span>
                <br/>
                 <button className="btn" ><Link to="/detail">Book Now</Link></button>
            </div>
        </div>
    )
}

export default card
