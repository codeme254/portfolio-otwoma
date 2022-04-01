import React from "react";

const Navigation = () => {
    return(
        <header className="header">
            <div className="header__logo">
                <h2 className="header__logo--text">D.Otwoma</h2>
            </div>
            <nav className="nav">
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
        </header>
    )
}

export default Navigation;