import useActions from "../../../api/actions";

const {ADD_ASSIGNMENT, defaultAssignments } = useActions()
const reducer = (state = defaultAssignments, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_ASSIGNMENT: {
      const newAssignment = [...state.assignment]
      newAssignment.push({id: action.id, name: action.name})
      return {
        ...state,
        assignment: newAssignment,
      };
    }
    default:
      return state;
  }
};

export default reducer;