import React from "react";
import "./Cover.css";
import { ReactComponent as Css } from "../../components/icon/language-css3.svg";
import { ReactComponent as Html5 } from "../../components/icon/language-html5.svg";
import { ReactComponent as Javascript } from "../../components/icon/language-javascript.svg";
import { ReactComponent as Node } from "../../components/icon/nodejs.svg";
import { ReactComponent as ReactIcon } from "../../components/icon/react.svg";

function Cover() {
    return (
        <div>
            <div className="col cover-page ml-5">
                <div className="mission mt-5 row">
                    <div className="row">
                        <div className="col">
                            <h3>
                                About Me
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                I am an adaptable <a href="http://t.cred.ly/l/89a7c8fd-982c-494e-8ef1-27d0f2f99085" target="_blank" rel="noopener noreferrer">recent graduate of a full stack web development boot camp</a>. I aim to leverage personal and academic experience to successfully fill the Software Engineer role at your company. Frequently praised as hard-working by my peers, I can be relied upon to help you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="skills mt-3 row">
                    <div className="row ">
                        <div className="col">
                            <h3>
                                Skills
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card-columns">
                                <div className="card">
                                    <Css
                                        className="card-img-top mt-3"
                                        alt="CSS" />
                                    <div className="card-body">
                                        <p className="card-title text-center">
                                            CSS
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <Html5
                                        className="card-img-top mt-3"
                                        alt="HTML5" />
                                    <div className="card-body">
                                        <p className="card-title text-center">
                                            HTML 5
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <Javascript
                                        className="card-img-top mt-3"
                                        alt="JavaScript" />
                                    <div className="card-body text-center">
                                        <p className="card-title">
                                            JavaScript
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <Node
                                        className="card-img-top mt-3"
                                        alt="NodeJs" />
                                    <div className="card-body">
                                        <p className="card-title text-center">
                                            Node.js
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <ReactIcon
                                        className="card-img-top mt-3"
                                        alt="React" />
                                    <div className="card-body">
                                        <p className="card-title text-center">
                                            React
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cover;