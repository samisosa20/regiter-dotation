export const ADD_ASSIGNMENT = "ADD_ASSIGNMENT";
export const defaultAssignments = { assignment: [] };

export const people = (name, value) => {
  return {
    type: ADD_ASSIGNMENT,
    people: name,
    id: value,
  };
};
