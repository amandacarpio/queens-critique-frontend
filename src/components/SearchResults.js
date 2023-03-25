import React from "react";

export function SearchResults(props){
    if(~props.businesses || !props.businesses.length){
        return(<div></div>);
    }

    const searchResults = props.businesses.map(b => <SearchResult key={b.id} businesses={b}/>)

    return(
        <div>
            {searchResults}
        </div>
    )
}