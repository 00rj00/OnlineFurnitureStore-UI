import axios from "axios";


export const getFurnituresAction = () => async (dispatch) => {
  const response = await axios.get("http://localhost:8080/api/displayFurniture/getAllFurnitureDetails");
  console.log(response.data);
  dispatch({
    type: "GET_FURNITURES",
    payload: response.data,
  });
};

export const getFurnitureByIdAction = (id) => async (dispatch) => {
  const result = await axios.get("http://localhost:8080/api/displayFurniture/getFurnitureDetails/" + id);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "GET_FURNITURE",
    payload: result.data,
  });
};

export const addFurnitureAction = (furniture) => async (dispatch) => {
  const result = await axios.post("http://localhost:8080/api/displayFurniture/addFurniture", furniture);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "ADD_FURNITURE",
    payload: result.data,
  });
};

export const deleteFurnitureAction = (id) => async (dispatch) => {
  const result = await axios.delete(`http://localhost:8080/api/displayFurniture/deleteFurniture/${id}`);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "DELETE_FURNITURE",
    payload: result.data,
  });
};

export const updateFurnitureAction = (furniture) => async (dispatch) => {
  const result = await axios.put("http://localhost:8080/api/displayFurniture/updateFurniture", furniture);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "UPDATE_FURNITURE",
    payload: result.data,
  });
};