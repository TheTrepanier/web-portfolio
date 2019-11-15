import React from "react";
import "./SkillCard.css";

function SkillCard(props) {
    return (
        <div className="card m-3">
            {props.svg}
            <div className="card-body">
                <p className="card-title text-center">
                    {props.skill}
                </p>
            </div>
        </div>
    );
};

export default SkillCard;