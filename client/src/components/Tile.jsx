import React, { useLayoutEffect, useRef } from "react";
import "./Tile.css"

export default function Tile({child: Child, height}){

    const currTile = useRef(null);

    useLayoutEffect(() => {
        currTile.current.style.height = height;
    });

    return (
        <div className="tile" ref ={currTile}>
            <Child />
        </div>
    )
}