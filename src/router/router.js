import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { connect } from "react-redux";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const AllRoute = ({ auth }) => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

    </Routes>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {})(AllRoute);
