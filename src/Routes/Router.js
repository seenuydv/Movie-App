import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "../pages/MoviePage"
import WebSeriesPage from "../pages/WebSeriesPage"
import TvShowPage from "../pages/TvShowPage"
import Home from "../pages/Home"


function AllRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Movie" element={<MoviePage/>} />
                <Route path="/Webseries" element={<WebSeriesPage/>} />
                <Route path="/Tvshow" element={<TvShowPage/>} />
            </Routes>
        </Router>
    );
}
export default AllRoute;