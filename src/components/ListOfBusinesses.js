import {Link} from 'react-router-dom'

export default function ListOfBusinesses ({business}) {
    return (
      <div>
        <Link to={`/${business.id}`}><h1 className='text-red-600 body-font font-poppins text-xl mt-10 text-center'>{business.name}</h1></Link>
        {/* Replace p tag with a Link element from react-router-dom */}
        {/* <p onClick={() => {}}>{business.id}</p> */}
        
        <img src={business.image_url} alt="restaurants" className='w-72'></img>
        {business.categories.map((categories, index) => <p key={index}>{categories.title}</p>)}
      </div>
    )
  }