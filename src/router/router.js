import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { connect } from "react-redux";
import Dashboard from "../pages/Dashboard/Dashboard";

const AllRoute = ({ auth }) => {
  return (
    <Routes>
      <Route
        path=""
        element={<Dashboard/>
        }
      />
    </Routes>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {})(AllRoute);
