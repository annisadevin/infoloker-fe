import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { connect } from "react-redux";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

const AllRoute = ({ auth }) => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {})(AllRoute);
