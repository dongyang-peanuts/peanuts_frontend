import { useNavigate } from "react-router-dom";
import AllMonitoringView from "./AllMonitoringView";

const AllMonitoringContainer = () => {
  const navigate = useNavigate();
  return <AllMonitoringView navigate={navigate} />;
};

export default AllMonitoringContainer;
