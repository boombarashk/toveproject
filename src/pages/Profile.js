import {useSelectorUser} from "../store/selectors";
import {getFromLocalStorage, STORAGE_ITEM_NAME} from "../storage";

const Profile = () => {
    let user = useSelectorUser()
    if (!user) {
        user = getFromLocalStorage(STORAGE_ITEM_NAME)
    }

    return <>
        <h1 className="title">Admin profile</h1>
        <p className="subtitle">{user}</p>
        <img src="https://avatars.githubusercontent.com/u/15381524?v=4" alt=""/>
    </>
}

export default Profile
