import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Name of the Company</h1>
            </header>
            <div className="content">
                <p> 
                    This is a responsive site made by Gatsby, React and Netlify so chill
                </p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Know us</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
