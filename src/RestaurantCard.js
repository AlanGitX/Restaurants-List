import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({restaurant}) {
    console.log(restaurant);
  return (
<div>
<Link to={`/view-restaurant/${restaurant.id}`} style={{textDecoration:'none',color:'white'}}>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{height: '400px'}} variant="top" src= {restaurant.photograph} />
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text>
                  {restaurant.neighborhood}
                </Card.Text>
                <Card.Text> Cusine : 
                  {restaurant.cuisine_type}
                </Card.Text>
              </Card.Body>
            </Card>
</Link >
</div>
  )
}

export default RestaurantCard