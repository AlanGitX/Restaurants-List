import React, {useState,useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {RestaurantsList} from './actions/homeActions'
import { useDispatch,useSelector } from 'react-redux'

function Home() {

    // state to hold data of restaurants
    // const [restaurant,setRestaurants] = useState([])

    // const fetchData = async()=>{
    //     const result = await fetch('/restaurants.json')
    //     result.json().then((data)=>{
    //         console.log(data.restaurants);
    //         setRestaurants(data.restaurants)
    //     })
    // }

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(RestaurantsList())
    },[])


    const {restaurants} = useSelector(state=>state.restaurantReducer)
    if(restaurants){
        console.log(restaurants);

    }
  return (
    <div>
        { restaurants?
        <Row>
            {
                restaurants.map((item)=>(
                    <Col md={4} sm={6} className='p-5'>
                    <RestaurantCard restaurant = {item}/>
                    </Col>
                ))
            }
        
        </Row>:" "}
    </div>
  )
}

export default Home