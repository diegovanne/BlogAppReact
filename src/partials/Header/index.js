import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getProfile } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const { profile } = useSelector(state => {
        return {
            profile: state.profile
        }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    let data = null;
    if (profile) {
        data = profile.data;
    }

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    return (
        <header className="w3l-header">
            <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <span className="fa fa-pencil-square-o" /> Van Le's Funny Blog</a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa icon-expand fa-bars" />
                        <span className="fa icon-close fa-times" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="header-author d-flex ml-lg-4 pl-2 mt-lg-0 mt-3">
                            <a className="img-circle img-circle-sm" href="author.html">
                                <img src={data && data.avartar} className="img-fluid" alt="..." />
                            </a>
                            <div className="align-self ml-3">
                                <a href="author.html">
                                    <h5>{data && data.name}</h5>
                                </a>
                                <span>{data && data.role}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-position">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div className="mode-container">
                                        <i className="gg-sun" />
                                        <i className="gg-moon" />
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>
            {/*//nav*/}
        </header>
    );
};

export default Header;
