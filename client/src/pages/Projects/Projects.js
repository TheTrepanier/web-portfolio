import React from "react";
import "./Projects.css";
import projects from "./Projects.json";
import Card from "../../components/Card/Card";

function Projects() {
    return (
        <div className="col-md-12">
            <div className="row">
                <div className="w-100">
                    <h3 className="display-4 my-4">Projects</h3>
                </div>
                <div>
                    <div>
                        {projects.map(projects => (
                            <Card
                                key={projects.id}
                                title={projects.id}
                                description={projects.description}
                                public={projects.publicLink}
                                github={projects.githubLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;