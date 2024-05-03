import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#myPage">Logo</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about">HOME</a></li>
                        <li><a href="#services">PUBLICATIONS</a></li>
                        <li><a href="#portfolio">PEOPLE</a></li>
                        {/* <li><a href="#pricing">PRICING</a></li>
                        <li><a href="#contact">CONTACT</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;