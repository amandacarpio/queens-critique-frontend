import { useLoaderData, Form, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Show(props) {
    const singleBusiness = useLoaderData()

    const {id} = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch(`https://queens-critique-site.onrender.com/comments/${id}/restaurant_comments/`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    }, []);
    
    // {fetch(`https://queens-critique-site.onrender.com/comments/${id}/restaurant_comments/`)
    // .then(response => response.json())
    // .then(data => setData(data)
    // }

    return (
        <div className="">
          <h1 className="text-5xl">{singleBusiness.name}</h1>
          <img src={singleBusiness.image_url} alt="restaurants"></img>
          <p>{singleBusiness.id}</p>
          <p>{singleBusiness.price}</p>
          {singleBusiness.categories.map((categories) => <p>{categories.title}</p>)}
          <h3>Critique's...</h3>
            
            {data.map((review) => ( 
                <>  
                <p>{review.name}</p>
                <p>{review.city}</p>
                <p>{review.review}</p>
                </>
            ))}

          {/* form for comments */}
          <Form action="/review" method="post">
            <div className="reviewInfo">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="text" name="city" placeholder="Select your city"></input>
            <input type="number" name="rating" placeholder="Rate your experience"></input>
            <input type="text" name="review" placeholder="What did you think of this restaurant?"></input>
            <input type="hidden" name="yelpId" value={singleBusiness.id}></input>
            </div>
            <input type="submit" value="Post"></input>
          </Form>
          <Link to={"/"}><button>Back</button></Link>
          </div>
    )
}