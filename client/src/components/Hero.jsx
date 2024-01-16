import React from "react";
import "./Hero.css"
import heroBackground from "../assets/images/hero section background.png"
import portfolioImg from "../assets/images/portfolio pic upscaled.png"

export default function Hero(){
    return (
        <div className = "hero">
            <img className = "hero-background" src = {heroBackground} alt = "hero background"/>
            <img className = "portfolio-img" src = {portfolioImg} alt = "Anas' Image"/>
        </div>
    )
}