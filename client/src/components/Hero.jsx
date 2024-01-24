import React, { useLayoutEffect, useState } from "react";
import "./Hero.css"
import heroBackground from "../assets/images/hero section background.png"
import portfolioImg from "../assets/images/portfolio pic upscaled.png"

export default function Hero(){

    const [show, setShow] = useState(false);
    const [insightsBottom, setInsightsBottom] = useState("50px");
    let insights;

    function setInsightsStyle(){
        insights = document.getElementById("insights");
        let style = window.getComputedStyle(insights);
        setInsightsBottom(style.getPropertyValue("bottom"));
    }

    function moveInsights(){
        if(insightsBottom === "0px" && !show){
            insights.style.animation = "hide-insights 1s ease both";
        }
        else if(show && insightsBottom === "50px"){
            insights.style.animation = "show-insights 1s ease both";
        }
        else if(!show && insightsBottom === "0px"){
            insights.style.animation = "hide-insights 1s ease both";
        }
    }

    useLayoutEffect(setInsightsStyle);

    useLayoutEffect(moveInsights, [show, insightsBottom]);

    return (
        <div className = "hero">
            <img className = "hero-background" src = {heroBackground} alt = "hero background"/>
            <img className = "portfolio-img" src = {portfolioImg} alt = "Anas' Image"/>
            <div className = "intro-txt">
                Hi! I Am Anas,<br/>
                A <div id = "data" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                    Data <div id = "insights-wrapper"><div id = "insights" onAnimationEnd={setInsightsStyle}>Insights</div></div>
                </div> Scientist
            </div>
        </div>
    )
}