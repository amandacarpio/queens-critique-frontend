export function Search(){
    return (
        <div className="searchBar">
            {/* Styling - would i remove the separate divs, group them together, and then flexbox it so they're all in line? */}
            <div className="keyword">
            <input type="text" placeholder="Burgers, Salads, Brunch"/>
            </div>
            <div className="location">
            <input type="text" placeholder="Where in Queens?"/>
            <div className="searchButton"><button>Search</button></div>
            </div>
        </div>
    )
}