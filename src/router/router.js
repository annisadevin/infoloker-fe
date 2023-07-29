import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { connect } from "react-redux";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Pouch from "../pages/Pouch/Pouch";

const AllRoute = ({ auth }) => {
  return (
    <>
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
    <Routes>
      <Route path="/pouch" element={<Pouch/>}/>
    </Routes>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {})(AllRoute);
