import React from "react";
import "./ArshaLandingPage.css";

function ArshLandingPage() {

    return (
        <React.Fragment>
            {/* Header section start */}
            <header id="arsha-header">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a className="title" href>Arsha</a></h1>
                    <nav id="navbar" className="arsha-navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href>Home</a></li>
                            <li><a className="nav-link scrollto" href>About</a></li>
                            <li><a className="nav-link scrollto" href>Services</a></li>
                            <li><a className="nav-link scrollto" href>Portfolio</a></li>
                            <li><a className="nav-link scrollto" href>Team</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
            {/* Header section end */}
        </React.Fragment>
    )

}
export default ArshLandingPage;
