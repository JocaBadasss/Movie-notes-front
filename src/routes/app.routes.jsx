import { Routes, Route } from "react-router-dom"

import Details from "../pages/Details"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import NewMovie from "../pages/NewMovie"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-movie" element={<NewMovie />} />
        </Routes>
    )
}