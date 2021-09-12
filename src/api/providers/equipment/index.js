import axios from "axios";

const useEquipment = () => {
  const listAssignments = () => {
    return axios({
      method: "GET",
      url: "http://localhost:3001/api/v1/equipments",
    });
  };
  const addAssignments = (data) => {
    return axios({
      method: "POST",
      url: "http://localhost:3001/api/v1/equipment",
      data: data
    });
  };
  return {
    listAssignments,
    addAssignments
  };
};

export default useEquipment;
