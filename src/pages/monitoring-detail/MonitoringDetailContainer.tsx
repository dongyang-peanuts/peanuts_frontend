import { use, useEffect, useState } from "react";
import MonitoringDetailView from "./MonitoringDetailView";
import axios from "axios";

const MonitoringDetailContainer = () => {
  const date = new Date();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState();
  const [history, setHistory] = useState();

  useEffect(() => {
    axios
      .get(`/admin/users/9`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/admin/users/alerts/9`)
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MonitoringDetailView
      date={date}
      data={data}
      history={history}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default MonitoringDetailContainer;
