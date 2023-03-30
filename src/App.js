import {Link, Outlet} from "react-router-dom"
import {Nav} from './Components/Nav'
import logo from './logo.png'
import './logo.css'
// import { useState, useEffect } from 'react'
// import { Form } from "react-router-dom"
import './index.css'
 
function App() {

  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const API_URL= process.env.REACT_APP_API_URL;

  // const options = {
    // method: 'GET',
    // headers: {
    //   accept: 'application/json',
    //   "x-requested-with": "xmlhttprequest",
    //   "Access-Control-Allow-Origin": "*",
    //   Authorization: `Bearer ${API_KEY}`
    // }
  // }

  // const [businesses, setBusinesses] = useState(null)
  // const [singleBusiness, setSingleBusiness] = useState(null)

  // useEffect(() => {
  //   fetchData()
  //   //eslint-disable-next-line
  // },[])


  // creating a function to retrieve yelp data
  // const fetchData = () => {
  //   fetch(`${API_URL}/businesses/search?location=queens&term=restaurants&sort_by=best_match&limit=50`, options)
  //   .then(response => response.json())

  //   .then(json => {

  //     // here is where we are setting the businesses state
  //     setBusinesses(json.businesses)
  //   })

  //   .catch(err => console.error('fetch data error:' + err))
  // }

  // function to get only 1 business returned from fetchData function
  // const oneBusiness = (businessId) => {
  //   fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}`, options) 
  //   .then(response => response.json())
  //   .then(response => {

  //     // we're setting the state for the single business to populate
  //     setSingleBusiness(response)

  //     // reset the items state to null
  //     setBusinesses(null)
  //   })
  //   .catch(err => console.error(err))
  // }

  // // go back button
  // const handleBack = () => {
  //   fetchData()
  //   setSingleBusiness(null)
  // }

  // const loading = () => <h1>Loading...</h1>

  // this is where I create the component for all businesses to populate
  // const ListOfBusinesses = ({business}) => {
  //   return (
  //     <div>
  //       <h1>{business.name}</h1>
  //       <p onClick={() => {oneBusiness(business.id)}}>{business.id}</p>
  //       <img src={business.image_url} alt="restaurants"></img>
  //       {business.categories.map((categories) => <p>{categories.title}</p>)}
  //     </div>
  //   )
  // }

  // this is where I'm actually displaying and rendering all businesses onto the page


  return (
    <div className="App">
      <Link to='/'><img className='logoCss' src={logo} alt='logo'/></Link>
      <Nav/>
      {/* {
        businesses ?
        businesses.map((business, index) => {
          return <div key={index}>
            <ListOfBusinesses business={business}/>
            </div>
        })
        :
        singleBusiness ? "" : loading()
      } */}
      {/* {
        // 
        singleBusiness ? 
        <div className="">
          <h1 className="text-5xl">{singleBusiness.name}</h1>
          <img src={singleBusiness.image_url} alt="restaurants"></img>
          <p>{singleBusiness.id}</p>
          <p>{singleBusiness.price}</p>
          {singleBusiness.categories.map((categories) => <p>{categories.title}</p>)}

          {/* form for comments */}{/*
          <Form action="/review" method="post">
            <div className="reviewInfo">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="text" name="city" placeholder="Select your city"></input>
            <input type="number" name="rating" placeholder="Rate your experience"></input>
            <input type="text" name="review" placeholder="What did you think of this restaurant?"></input>
            <input type="hidden" name="yelpId" value={singleBusiness.id}></input>
            </div>
            <input type="submit"></input>
          </Form>
          <button onClick={handleBack}>Back</button>
          </div>
          :
          null
      } */}
      <Outlet/>
    </div>
  )
}

export default App;