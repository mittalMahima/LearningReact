import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className ="card" style={{overflow:"hidden"}}>
      <img src="https://images.pexels.com/photos/1181288/pexels-photo-1181288.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={333} style={{border:"2px solid black"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
