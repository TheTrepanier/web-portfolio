import React from "react";

function Card(props) {
    return (
        <div className="card">
            {props.cardImg}
            <div className="card-body">
                <h5 className="card-title">
                    {props.tech}
                </h5>
            </div>
        </div>
    )
};