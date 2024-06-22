import { useState } from 'react';

function getListOfSections(sectionsList){
    return(
        sections.map(section =>(
                <li href={"#"+section.id}>
                    {section.title}
                    {(section.subSections.length > 0 ? <ul>{()=>getListOfSections}</ul> : "")}
                </li>
            )
        )
    );
}

export default function TableOfContents({ sections = [
    {
        title: "No Title",
        id: "",
        subSections: null
    }
] }){
    const [navClass, setNavClass] = useState("");

    const tableOfContentsSections = getListOfSections(sections);

    return (
        <body>
            
        </body>
    );
}