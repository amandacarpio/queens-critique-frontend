import {Link} from 'react-router-dom'

export default function ListOfBusinesses ({business}) {
    return (
      <div>
        <Link to={`/${business.id}`}><h1>{business.name}</h1></Link>
        {/* Replace p tag with a Link element from react-router-dom */}
        {/* <p onClick={() => {}}>{business.id}</p> */}
        
        <img src={business.image_url} alt="restaurants"></img>
        {business.categories.map((categories, index) => <p key={index}>{categories.title}</p>)}
      </div>
    )
  }