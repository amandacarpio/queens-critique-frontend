import { useLoaderData } from "react-router-dom"
import ListOfBusinesses from "../components/ListOfBusinesses"

export default function Index() {
    const restaurants = useLoaderData()
    console.log(restaurants)
    const {businesses} = restaurants
    return (
        <div className="w-10/12 flex flex-wrap justify-evenly mx-auto shadow-xl">
            {businesses.map((business, index) => {
                return <div key={index} className="mx-12 shadow-lg">
                <ListOfBusinesses business={business}/>
                </div>
            })}
          </div>
    )
}