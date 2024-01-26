import React from "react";
import "./App.css"
import Hero from "./Hero";
import Tile from "./Tile";

export default function App() {
    return (
        <Tile child={Hero} height={"60vh"}/>
    )
}