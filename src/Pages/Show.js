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
      //eslint-disable-next-line
    }, []);
    
    // {fetch(`https://queens-critique-site.onrender.com/comments/${id}/restaurant_comments/`)
    // .then(response => response.json())
    // .then(data => setData(data)
    // }

    return (
        <div className="w-[60rem] mx-auto">
          <h1 className="text-red-600 body-font font-poppins text-xl text-center my-10">{singleBusiness.name}</h1>
          <p className="text-black text-xl">{singleBusiness.price}</p>
          <img src={singleBusiness.image_url} alt="restaurants" className="w-[60rem]"></img>
          <div className="flex">{singleBusiness.categories.map((categories, index) => <p key={index} className="text-black justify-between flex body-font font-poppins text-base mb-10"> {categories.title} + </p>)}</div>
          <h3 className="text-red-600 body-font font-poppins text-base mb-14">Critique's...</h3>

          
            {data.map((review) => ( 
                <>
                <div className="shadow-xl mb-14">  
                <h5 className="font-bold">{review.name}</h5>
                <h5 className="text-black">{review.city}</h5>
                <h5 className="font-bold">{review.rating} / 5</h5>
                <p className="mb-12">{review.review}</p>
                <div className="flex">
                <Link to={`/update/${review.id}`}><button className="">Update</button></Link>
                <Form action={`/delete/${review.id}`} method="post"><button>Delete</button></Form>
                </div>
                </div>  
                </>
            ))}

          {/* form for comments */}
          <h3 className="text-black body-font font-poppins text-base">Add your critique</h3>
          <Form action="/review" method="post" className="flex flex-col items-center">
            <div className="reviewInfo">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="text" name="city" placeholder="Location"></input>
            <input type="number" name="rating" placeholder="Rate your experience on a scale of 1-5"></input>
            <input type="text" name="review" placeholder="What did you think of this restaurant?"></input>
            <input type="hidden" name="yelpId" value={singleBusiness.id}></input>
            </div>
            <input type="submit" value="Post Comment"></input>
          </Form>
          <Link to={"/"}><button className="mx-auto">Back</button></Link>
          </div>
    )
}