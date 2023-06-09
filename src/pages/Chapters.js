import {Link} from "react-router-dom";
import {useSelectorChapters} from "../store/selectors";

const Chapters = () => {
    const chapters = useSelectorChapters();

    const links = (chapters && chapters.length)
        ? chapters.filter(item => item.page).map(item => <li key={item.id}>
            <Link to={`/news/${item.page}`} >{item.title}</Link>
            &nbsp;(страница {item.page})
        </li>)
        : 'Not Found'

    return <div>
        <ul>
        { links }
        </ul>
    </div>
}

export default Chapters
