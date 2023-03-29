import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import { createAction, updateAction, deleteAction } from './actions'

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="review" action={createAction}/>
            <Route path="update" action={updateAction}/>
            <Route path="delete" action={deleteAction}/>
        </Route>
    </>
))

export default router