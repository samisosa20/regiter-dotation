// Provider
import useProviders from "../../../api/providers"
import useActions from "../../../api/actions";

const {INIT_DATA, ADD_DATA, defaultAssignments } = useActions()
const {useEquipment} = useProviders();
const {listAssignments} = useEquipment();
const reducer = async (state = defaultAssignments, action) => {
  switch (action.type) {
    case INIT_DATA: {
      console.log(action)
      return {
        ...state,
        assignment: action.data,
      };
    }
    case ADD_DATA: {
      return {
        ...state,
        assignment: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;