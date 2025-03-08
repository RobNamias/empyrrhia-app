import React from 'react';
import { NavLink } from "react-router-dom";
// import Logo from '../components/Logo';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>ACCUEIL</li>
                </NavLink>
                <NavLink to="/medias" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>MEDIAS</li>
                </NavLink>
                <NavLink to="/dates" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>DATES</li>
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>CONTACT</li>
                </NavLink>
                {/* <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A PROPOS</li>
                </NavLink> */}


                {/* <Logo /> */}


            </ul>
        </div>
    );
};

export default Navigation;