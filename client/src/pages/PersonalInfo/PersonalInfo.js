import React from "react";
import "./PersonalInfo.css";
import { Link } from "react-router-dom";
import { ReactComponent as Linkedin } from "../../components/icon/linkedin.svg";
import { ReactComponent as GitHub } from "../../components/icon/github.svg";
import Resume from "../../docs/resume.pdf";

function PersonalInfo() {
    return (
        <div className="col-md-5 App-header">
            <div className="row">
                <div className="col text-center">
                    <h1 className="text-right-md">
                        MICHAEL TREPANIER
                    </h1>
                    <p className="header-text">
                        michael.s.trepanier@gmail.com
                    </p>
                    <p className="header-text">
                        Phoenix, Arizona
                    </p>
                </div>
            </div>
            <div className="row icon-row mt-3">
                <div className="col-6 text-center">
                    <a
                        href="https://www.linkedin.com/in/michael-trepanier/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Linkedin
                            className="social-icon"
                        />
                    </a>
                </div>
                <div className="col-6 text-center">
                    <a
                        href="https://github.com/TheTrepanier"
                        target="_blank"
                        rel="noopener noreferrer">
                        <GitHub
                            className="social-icon"
                        />
                    </a>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <a
                        className="btn btn-outline-light"
                        href={Resume}
                        download="Michael-Trepanier-Resume"
                        target="_blank"
                        rel="noopener noreferrer">
                        RESUME
                    </a>
                </div>
                <div className="col">
                    <Link to="/" className="btn btn-outline-light">Cover</Link>
                </div>
                <div className="col">
                    <Link to="/projects" className="btn btn-outline-light">Projects</Link>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;