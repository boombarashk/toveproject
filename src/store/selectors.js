import {useSelector} from "react-redux";
import {getFromLocalStorage, STORAGE_ITEM_NAME} from "../storage";

export const useSelectorChapters = () => useSelector(state => state.chapters)

export const useSelectorUser = () => {
    return useSelector(state => state.user) || getFromLocalStorage(STORAGE_ITEM_NAME)
}
