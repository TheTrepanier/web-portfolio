import React from "react";

function Card(props) {
    return (
        <div className="card m-3">
            <div className="card-body">
                <h5 className="card-title">
                    {props.title}
                </h5>
                <p className="card-text">
                    {props.description}
                </p>
                <a
                    className="card-link"
                    href={props.public}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live
                </a>
                <a
                    className="card-link"
                    href={props.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </div>
        </div>
    )
};

export default Card;