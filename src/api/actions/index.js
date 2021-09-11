import { useDispatch } from "react-redux";
import {people, ADD_ASSIGNMENT, defaultAssignments} from "./People"

const useActions = () => {
    return {
        people,
        ADD_ASSIGNMENT,
        defaultAssignments
    }
}

export default useActions;