import React, { useState, useEffect } from "react";
import { Col,Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function RestaurantView() {
  const params = useParams();
  console.log(params.id);


  const [restaurant, viewRestaurant] = useState([]);


  const fetchData = async () => {
    const result = await fetch("/restaurants.json");
    result.json().then((data) => {
      console.log(data.restaurants);
      viewRestaurant(data.restaurants);
      console.log(restaurant);


    });
  };
  const viewItem  =(restaurant.find(item=>(item.id===params.id)))
  console.log(viewItem);

  useEffect(() => {
    fetchData();
  }, []);


  return(
    <Row>
      <Col lg={4}  className="m-5"> <img src={viewItem.photograph} alt="" height={"400px"}/> </Col>
      <Col lg={4}  className="m-5"> 
      <ul>
        <li>{viewItem.address}</li>
        <li>{viewItem.cuisine_type}</li>

      </ul>
       </Col>

    </Row>
  )





}

export default RestaurantView;
