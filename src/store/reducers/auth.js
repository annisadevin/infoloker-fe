import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { client } from "../../lib/client";
import { LOGIN, LOGOUT, LOAD_USER, LOAD_USER_INFO } from "../actions/type";

const initialState = {
  token: "",
  name: "",
  birthDate: "",
  balance: "",
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      const storageData = localStorage.getItem("clotht");
      const user = JSON.parse(storageData);
      state.token = user.token;
      state.role = user.role;
      state.phone = user.noTelp;
      state.isLoggedIn = true;
      return {
        ...state,
      };
    case LOAD_USER_INFO:
      state.name = action.user.name;
      state.birthDate = action.user.birthDate;
      state.balance = action.user.balance;
      localStorage.setItem("infoloker", JSON.stringify(state));
      console.log(localStorage.getItem("infoloker"));
      return {
        ...state,
      };
    case LOGIN:
      state.token = action.user.token;
      localStorage.setItem("infoloker", JSON.stringify(action.user));
      state.isLoggedIn = true;
      // state.token = action.user.token;
      // localStorage.setItem("clotht", JSON.stringify(action.user));

      // async function getUserData() {
      //   const { data: userData, status } = await client.get("/api/resource");
      //   if (status === 200) {
      //     toast.success("Login berhasil");
      //     state.role = userData[0].peran;
      //     state.phone = userData[0].noTelp;
      //     state.isLoggedIn = true;
      //     localStorage.setItem("clotht", JSON.stringify(state));
      //   } else {
      //     toast.error("Gagal mengambil data pengguna");
      //   }
      // }
      // getUserData();

      return {
        ...state,
      };
    case LOGOUT:
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("infoloker");
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default authReducer;
