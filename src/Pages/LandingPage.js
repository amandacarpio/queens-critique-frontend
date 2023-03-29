// import { SearchBar } from '../Components/SearchBar'
import { Link, useLoaderData } from 'react-router-dom'

export function LandingPage(){
    const restaurants = useLoaderData()
    return(
        <div>
            {/* <SearchBar search={hitSearch}/> */}
            {restaurants.businesses.map((restaurant) => (
                <Link to={`/restaurant/${restaurant.id}`}><p>{restaurant.name}</p></Link>
                

            ))}
        </div>
    )
}