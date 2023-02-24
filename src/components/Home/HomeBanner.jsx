import React from "react";
import"./Home.css";
import Banner from '../../images/Banner.png'

export default function HomeBanner() {
    return (
        <section className='banner'>
            <img src={Banner} alt='banner' className='bannerImg'></img>
            <div className='bannerWrapper'></div>
            <h1 className='bannerText'>Chez vous, partout et ailleurs</h1>
        </section>
    );
}
