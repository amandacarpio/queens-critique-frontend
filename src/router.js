import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import { LandingPage } from "./Pages/LandingPage"
import { WriteAReview } from "./Pages/WriteAReview"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<LandingPage/>}/>
            <Route path="writeareview" element={<WriteAReview/>}/>
        </Route>
    </>
))

export default router