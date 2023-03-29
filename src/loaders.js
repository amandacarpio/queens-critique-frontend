// My Deployed API URL
const REACT_APP_API_URL="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3"

// indexLoader - fetches all of my data
export const indexLoader = async() => {
    const response = await fetch(REACT_APP_API_URL + "/businesses/search?location=queens&term=restaurants&sort_by=best_match&limit=50")
    const restaurants = await response.json()
    return restaurants
};

// showLoader - fetches 1 piece of data
export const showLoader = async({params}) => {
    const response = await fetch(REACT_APP_API_URL + `/businesses/${params.id}/`)
    const restaurant = await response.json()
    return restaurant
};