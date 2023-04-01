// My Deployed API URL
const REACT_APP_API_URL="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3"

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      "x-requested-with": "xmlhttprequest",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  }

// indexLoader - fetches all of my data
export const indexLoader = async() => {
    const response = await fetch(REACT_APP_API_URL + "/businesses/search?location=queens&term=restaurants&sort_by=best_match&limit=50", options)
    const restaurants = await response.json()
    // console.log(restaurants)
    return restaurants
};

// showLoader - fetches 1 piece of data
export const showLoader = async({params}) => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${params.id}`, options)
    const restaurant = await response.json()
    return restaurant
};

export const individualCommentLoader = async({params}) => {
    const response = await fetch(`https://queens-critique-site.onrender.com/comments/${params.id}/individual_review/`)//, {...options, Authorization: null})
    const review = await response.json()
    console.log("response", review)
    return review[0]
}