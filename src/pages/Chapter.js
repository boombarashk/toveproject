import React from "react";
import { useParams } from 'react-router-dom'
import {useSelectorChapters} from "../store/selectors";

const Chapter = () => {
    let { id } = useParams();

    const chapters = useSelectorChapters();

    const text =chapters[+id]
        ? chapters[+id -1].content
        : 'Not Found'

    return <div>
        <div className="subtitle">{id}.</div>
        <div className="contentChapter" dangerouslySetInnerHTML={{__html:  text }}/>
    </div>
}

export default Chapter
