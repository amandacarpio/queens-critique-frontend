import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import { createAction, updateAction, deleteAction } from './actions'
import Show from "./Pages/Show"
import { indexLoader, showLoader } from "./loaders"
import Index from "./Pages/Index"

const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path=":id" element={<Show/>} loader={showLoader}/>
            <Route path="review" action={createAction}/>
            <Route path="update" action={updateAction}/>
            <Route path="delete" action={deleteAction}/>
        </Route>
))

export default router