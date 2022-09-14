import React from "react"
import './styles.css'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`./${props.img}`} className="ima-ge" />
            <div className="card-stats">
                <img src="Star 1.png" className="star-light" />
                <span className="rat-ing">{props.rating}</span>
                <span className="gray">({props.number}) . </span>
                <span className="graish">{props.country}</span>
            </div>
            <p className="topic-card">{props.title}</p>
            <p className="price-person"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}