import { useLoaderData, Form, Link, useParams } from "react-router-dom";

export default function Update(props) {
    const singleComment = useLoaderData()
    console.log(singleComment)
    const {id} = useParams()

    // const [data, setData] = useState([]);
    // useEffect(() => {
    // fetch(`https://queens-critique-site.onrender.com/comments/${id}/individual_review/`)
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   .catch(error => console.error(error));
    //   //eslint-disable-next-line
    // }, []);
    
    // {fetch(`https://queens-critique-site.onrender.com/comments/${id}/restaurant_comments/`)
    // .then(response => response.json())
    // .then(data => setData(data)
    // }

    return (
        <div className="">
          {/* form for comments */}
          <h3>Changed your mind? Update your critique!</h3>
          <Form action={`/update/${id}`} method="PUT">
            <div className="reviewInfo">
            <input type="hidden" name="id" value={singleComment.id}></input>
            <input type="text" name="name" placeholder="Name" defaultValue={singleComment[0].name}></input>
            <input type="text" name="city" placeholder="Select your city" defaultValue={singleComment[0].city}></input>
            <input type="number" name="rating" placeholder="Rate your experience" defaultValue={singleComment[0].rating}></input>
            <input type="text" name="review" placeholder="What changed your mind? Different experience?"></input>
            <input type="hidden" name="yelpId" value={singleComment[0].id}></input>
            </div>
            <input type="submit" value="Update review"></input>
          </Form>
          <Link to={"/"}><button>Back</button></Link>
          </div>
    )
}