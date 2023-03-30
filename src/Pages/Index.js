import { Link, useLoaderData } from "react-router-dom"
import ListOfBusinesses from "../Components/ListOfBusinesses"

export default function Index(props) {
    const restaurants = useLoaderData()
    console.log(restaurants)
    const {businesses} = restaurants
    return (
        <div>
            {businesses.map((business, index) => {
                return <div key={index}>
                <ListOfBusinesses business={business}/>
                </div>
            })}
          </div>
    )
}