import { useLoaderData, Form } from "react-router-dom";


export default function Show(props) {
    const singleBusiness = useLoaderData()

    return (
        <div className="">
          <h1 className="text-5xl">{singleBusiness.name}</h1>
          <img src={singleBusiness.image_url} alt="restaurants"></img>
          <p>{singleBusiness.id}</p>
          <p>{singleBusiness.price}</p>
          {singleBusiness.categories.map((categories) => <p>{categories.title}</p>)}

          {/* form for comments */}
          <Form action="/review" method="post">
            <div className="reviewInfo">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="text" name="city" placeholder="Select your city"></input>
            <input type="number" name="rating" placeholder="Rate your experience"></input>
            <input type="text" name="review" placeholder="What did you think of this restaurant?"></input>
            <input type="hidden" name="yelpId" value={singleBusiness.id}></input>
            </div>
            <input type="submit"></input>
          </Form>
          <button>Back</button>
          </div>
    )
}