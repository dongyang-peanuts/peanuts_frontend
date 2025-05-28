import { useState } from "react";
import MonitoringDetailView from "./MonitoringDetailView";

const MonitoringDetailContainer = () => {
  const date = new Date();
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <MonitoringDetailView
      date={date}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default MonitoringDetailContainer;
