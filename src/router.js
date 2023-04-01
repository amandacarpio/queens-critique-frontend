import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import { createAction, updateAction, deleteAction } from './actions'
import Show from "./Pages/Show"
import { indexLoader, showLoader, individualCommentLoader } from "./loaders"
import Index from "./Pages/Index"
import Update from './Pages/Update'

const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path=":id" element={<Show/>} loader={showLoader}/>
            <Route path="update/:id" element={<Update/>} action={updateAction} loader={individualCommentLoader}/>
            <Route path="review" action={createAction}/>
            {/* <Route path="update/:id" action={updateAction}/> */}
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
))

export default router