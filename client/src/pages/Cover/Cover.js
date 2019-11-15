import React from "react";
import "./Cover.css";
import SkillCard from "../../components/SkillCard/SkillCard";
import Skills from "../../components/SkillCard/skills";

function Cover() {
    return (
        <div id="cover" className="col-md-12">
            <div className="mission mt-4 row">
                <div className="row">
                    <div className="col">
                        <h3 className="display-4">
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
            <div id="skills" className="mt-3 row">
                <div className="row w-100">
                    <div className="col">
                        <h3 className="display-4">
                            Skills
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {Skills.map(skill => (
                        <SkillCard
                            key={skill.id}
                            svg={skill.svg}
                            skill={skill.alt}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cover;