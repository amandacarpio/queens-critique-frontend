import { redirect } from "react-router-dom"

const BACKEND_URL = "https://queens-critique-site.onrender.com/comments/"

export const createAction = async({request}) => {

    const formData = await request.formData()
    console.log("createAction")

    const newComment = {
        name: formData.get("name"),
        city: formData.get("city"),
        rating: formData.get("rating"),
        review: formData.get("review"),
        yelpId: formData.get("yelpId"),
    }

await fetch(BACKEND_URL, {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newComment)
})
return redirect("/")
}

export const updateAction = async({request, params}) => {

    const formData = await request.formData()
    // console.log(updateAction)

    const id = params.id
    const updatedAction = {
        name: formData.get("name"),
        city: formData.get("city"),
        rating: formData.get("rating"),
        review: formData.get("review"),
        yelpId: formData.get("yelpId"),
    }
    console.log("new data", updatedAction)

    await fetch(BACKEND_URL + `${id}/individual_review_put/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAction)
    })
    // console.log(response)
    return redirect("/" + updatedAction.yelpId)
}

export const deleteAction = async({params}) => {

    const id = params.id

    await fetch(BACKEND_URL + `${id}/individual_review_delete/`, {
        method: "delete",
    })

    return redirect("/")
}