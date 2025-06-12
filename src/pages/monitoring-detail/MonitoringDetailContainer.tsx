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
      .get(`/admin/users/17`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/admin/users/alerts/17`)
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
    return <div>로딩중입니다...</div>;
  }

  return <MonitoringDetailView date={date} data={data} history={history} />;
};

export default MonitoringDetailContainer;
