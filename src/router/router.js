import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { connect } from "react-redux";
import Dashboard from "../pages/Dashboard/Dashboard";
import QuizLanding from "../pages/Quiz/QuizLanding";
import Quiz from "../pages/Quiz/Quiz";
import Recommendations from "../pages/Recommendation/Recommendation";

const AllRoute = ({ auth }) => {
  return (
    <Routes>
      <Route
        path=""
        element={<Dashboard/>
        }
      />
      <Route
        path="/quizLanding"
        element={<QuizLanding/>
        }
      />
      <Route
        path="/quiz"
        element={<Quiz/>
        }
      />
      <Route
        path="/recommendations"
        element={<Recommendations/>
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
