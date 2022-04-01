import React, {useRef} from "react";

const Navigation = () => {
    const navRef = useRef(null)
    const toggleNav = () => {
        navRef.current.classList.toggle('show-nav')
    }
    return(
        <header className="header">
            <div className="header__logo">
                <h2 className="header__logo--text">D.Otwoma</h2>
            </div>
            <nav className="nav" ref={navRef}>
                <ul className="nav__list">
                    <li className="nav__item"><a href="/" className="nav__item--link">Home</a></li>
                    <li className="nav__item"><a href="/" className="nav__item--link">About me</a></li>
                    <li className="nav__item"><a href="/" className="nav__item--link">Projects</a></li>
                    <li className="nav__item"><a href="/" className="nav__item--link">Upcoming projects</a></li>
                    <li className="nav__item"><a href="/" className="nav__item--link">code jokes</a></li>
                    <li className="nav__item"><a href="/" className="nav__item--link">code facts</a></li>
                    <li className="nav__item"><a href="/" className="nav__item--link">Another link</a></li>
                    {/* <li className="nav__item"><a href="/" className="nav__item--link">Another link</a></li> */}
                </ul>
            </nav>
            <div className="nav__burger_pr" onClick={toggleNav}>
                <div className="nav__burger nav__burger--1"></div>
                <div className="nav__burger nav__burger--2"></div>
                <div className="nav__burger nav__burger--3"></div>
            </div>
        </header>
    )
}

export default Navigation;