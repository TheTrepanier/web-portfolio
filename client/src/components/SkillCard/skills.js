import React from "react";
import { ReactComponent as Css } from "../../components/icon/language-css3.svg";
import { ReactComponent as Html5 } from "../../components/icon/language-html5.svg";
import { ReactComponent as Javascript } from "../../components/icon/language-javascript.svg";
import { ReactComponent as Node } from "../../components/icon/nodejs.svg";
import { ReactComponent as ReactIcon } from "../../components/icon/react.svg";

const Skills = [
    {
        "id": "css",
        "svg": <Css />,
        "alt": "CSS 3"
    },        {
        "id": "Html5",
        "svg": <Html5 />,
        "alt": "HTML 5"
    },        {
        "id": "JavaScript",
        "svg": <Javascript />,
        "alt": "JavaScript"
    },        {
        "id": "Node",
        "svg": <Node />,
        "alt": "Node Js"
    },        {
        "id": "React",
        "svg": <ReactIcon/>,
        "alt": "React Js"
    }
];

export default Skills;