import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginContainer from "./pages/login/LoginContainer";

function App() {
  return (
    <Routes>
      {/*로그인 화면 - 시작화면 */}
      <Route path="/" element={<LoginContainer />} />
    </Routes>
  );
}

export default App;
