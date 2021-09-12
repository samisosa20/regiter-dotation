// Provider
import useActions from "../../../api/actions";

const {INIT_DATA, ADD_DATA, defaultAssignments } = useActions()
const reducer = (state = defaultAssignments, action) => {
  switch (action.type) {
    case INIT_DATA: {
      return {
        ...state,
        assignment: action.data,
      };
    }
    case ADD_DATA: {
      return {
        ...state,
        assignment: action.data.result,
        status: 200,
        message: action.data.message.message,
        colorMessage: action.data.message.color,
      };
    }
    case 'SHOW_ERROR': {
      return {
        ...state,
        status: action.data.status,
        message: action.data.data.message.message,
        colorMessage: action.data.data.message.color,
      };
    }
    case 'HIDDEN_MESSAGE': {
      return {
        ...state,
        status: 0,
        message: '',
      };
    }
    default:
      return state;
  }
};

export default reducer;