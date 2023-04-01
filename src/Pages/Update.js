import { useLoaderData, Form, Link, useParams } from "react-router-dom";

export default function Update(props) {
    const singleComment = useLoaderData()
    console.log(singleComment)
    const {id} = useParams()
    console.log({id})

    return (
        <div className="">
          {/* form for comments */}
          <h3>Changed your mind? Update your critique!</h3>
          <Form action={`/update/${id}`} method="post">
            <div className="reviewInfo">
            <input type="hidden" name="id" value={singleComment.id}></input>
            <input type="text" name="name" placeholder="Name" defaultValue={singleComment.name}></input>
            <input type="text" name="city" placeholder="Select your city" defaultValue={singleComment.city}></input>
            <input type="number" name="rating" placeholder="Rate your experience" defaultValue={singleComment.rating}></input>
            <input type="text" name="review" placeholder="What changed your mind? Different experience?" defaultValue={singleComment.review}></input>
            <input type="hidden" name="yelpId" value={singleComment.yelpId}></input>
            </div>
            <input type="submit" value="Update review"></input>
          </Form>
          <Link to={"/"}><button>Back</button></Link>
          </div>
    )
}