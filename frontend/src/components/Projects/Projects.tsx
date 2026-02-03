import { useState } from "react";
import { motion } from "framer-motion";

// util
import { get_svg_icons } from "../util/get_svg_icons";

// components
import Item from "./Item/Item";

export default function Projects() {

    const projectItems = ["FlowGrid", "KiloQuest"];

    // link open switch case
    const handleClick = (projectName : string) => {

        let linkUrl = ''

        switch (projectName) {
            case 'FlowGrid' :
                linkUrl='https://www.flowgrid.app/'
                break
            case 'KiloQuest' :
                linkUrl='https://jabrews.itch.io/kilo-quest-demo'
                break
            default :
                return
        }
        
        window.open(linkUrl, "_blank", "noopener,noreferrer")
    }


    return (
        <div className="projects-container">
            <div className="header">
                <p>My Projects</p>
            </div>

            <div className="body">
                {projectItems.map((item) => (
                    <span onClick={() => {handleClick(item)}}>
                        <Item item={item} />
                    </span>
                ))}
            </div>
        </div>
    );
}
