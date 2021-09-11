import axios from "axios";

const useEquipment = () => {
    const listAssignments = () => {
        return axios({
          method: "GET",
          url: "http://localhost:3001/api/v1/equipments"
        });
      };
      return {
        listAssignments
      }
}


export default useEquipment