import { SearchBar } from '../Components/SearchBar'
import { useNavigate } from 'react-router-dom'

export function LandingPage(){

    const history = useNavigate()
    
    function hitSearch(keyword, location) {
        const encodedKeyword = encodeURI(keyword)
        const encodedLocation = encodeURI(location)
        history(`/writeareview?find_desc=${encodedKeyword}&find_loc=${encodedLocation}`)
    }

    return(
        <div>
            <SearchBar search={hitSearch}/>
        </div>
    )
}