import axios from "axios";

export const loginAction = (user) => (dispatch) => {
  axios
    .post("http://localhost:8080/api/login", user)
    .then((res) =>
      dispatch({
        type: "LOGIN",
        payload: res.data,
      })
    )
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({
        type: "ERR_RES",
        payload: error.response.data.message,
      });
    });
};
export const logoutAction = (email) => async (dispatch) => {
  const result = await axios.patch(`http://localhost:8080/api/logout/${email}`);
  console.log(result);
  const res = result.data;
  res.errMsg = "";
  dispatch({
    type: "LOGOUT",
    payload: res,
  });
};