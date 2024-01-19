import React from "react";
import "./Hero.css"
import heroBackground from "../assets/images/hero section background.png"
import portfolioImg from "../assets/images/portfolio pic upscaled.png"

export default function Hero(){

    function showInsights() {
        document.getElementById("insights").style.animation = "show-insights 1s ease both";
    }

    function hideInsights() {
        document.getElementById("insights").style.animation = "hide-insights 1s ease both";
    }

    return (
        <div className = "hero">
            <img className = "hero-background" src = {heroBackground} alt = "hero background"/>
            <img className = "portfolio-img" src = {portfolioImg} alt = "Anas' Image"/>
            <div className = "intro-txt">
                Hi! I Am Anas,<br/>
                A <div id = "data" onMouseEnter={showInsights} onMouseLeave={hideInsights}>
                    Data <div id = "insights-wrapper"><div id = "insights">Insights</div></div>
                </div> Scientist
            </div>
        </div>
    )
}