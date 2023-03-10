import React, { useState, useEffect } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RateReviews from "./RateReviews";
import { useSelector } from "react-redux";


function RestaurantView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [restaurant, viewRestaurant] = useState([]);
  const params = useParams();
  console.log(params.id);

  // const fetchData = async () => {
  //   const result = await fetch("/restaurants.json");
  //   result.json().then((data) => {
  //     console.log(data);
  //     viewRestaurant(data.restaurants);
  //   });
  // };
  // console.log(restaurant);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {restaurants} = useSelector(state=>state.restaurantReducer)


  const viewItem = restaurants.find((item) => item.id == params.id);
  console.log(viewItem);

  return (
    <>
      {viewItem ? (
        <Row className="text-center m-5">
          <Col md={3}>
            {" "}
            <img src={viewItem.photograph} alt="" height={"400px"} />{" "}
          </Col>
          <Col md={7}>
            <ListGroup>
              <ListGroup.Item>
                <h2>{viewItem.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>Address : {viewItem.address}</ListGroup.Item>
              <ListGroup.Item> Cusine: {viewItem.cuisine_type}</ListGroup.Item>
              <ListGroup.Item>
                <Button variant="primary" onClick={handleShow}>
                  Click to view the working hours
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <ListGroup>
      <ListGroup.Item>Monday : {viewItem.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {viewItem.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {viewItem.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday : {viewItem.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {viewItem.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {viewItem.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {viewItem.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>
                  </Modal.Body>
                </Modal>
              </ListGroup.Item>
              <ListGroup.Item> <RateReviews reviews = {viewItem.reviews}/> </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        "nothing to display"
      )}
    </>
  );
}

export default RestaurantView;
