import { Route, Routes } from "react-router-dom";
import LoginContainer from "./pages/login/LoginContainer";
import RegisterContainer from "./pages/register/RegisterContainer";
import AllMonitoringContainer from "./pages/all- monitoring/AllMonitoringContainer";
import MonitoringDetailContainer from "./pages/monitoring-detail/MonitoringDetailContainer";
import UserInfoContainer from "./pages/userInfo/UserInfoContainer";
import UserInfoDetailContainer from "./pages/userInfoDetail/UserInfoDetailContainer";

function App() {
  return (
    <Routes>
      {/*로그인 화면 - 시작화면 */}
      <Route path="/" element={<LoginContainer />} />
      {/* 회원가입 화면*/}
      <Route path="/register" element={<RegisterContainer />} />
      {/*전체 모니터링*/}
      <Route path="/all-monitoring" element={<AllMonitoringContainer />} />
      <Route
        path="/all-monitoring/detail"
        element={<MonitoringDetailContainer />}
      />
      {/*사용자 정보*/}
      <Route path="/userinfo" element={<UserInfoContainer />} />
      <Route path="/userinfo/detail" element={<UserInfoDetailContainer />} />
    </Routes>
  );
}

export default App;
