import { useState } from 'react'

export function SearchBar(props){
    const [keyword, setKeyword] = useState(props.keyword)
    const [location, setLocation] = useState(props.location)

    function hitSearch(event) {
        console.log(keyword, location)
        event.preventDefault()
    }

    return (
        
        <form onSubmit={hitSearch}>
            <div className='searchBar'>
            <input type="text" placeholder="Burgers, Salads, Brunch" onChange={(event) => setKeyword(event.target.value)}/>
            <input type="text" placeholder="Where in Queens?" onChange={(event) => setLocation(event.target.value)}/>
            <button>Search</button>
            </div>
        </form>

    )
}