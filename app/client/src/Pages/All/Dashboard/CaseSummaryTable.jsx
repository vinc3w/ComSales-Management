import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../../config.json";

function Header() {

  return (
    <thead>
      <tr>
        <td>Case Name</td>
        <td>Property Type</td>
        <td>Status</td>
        <td>Total Commission (RM)</td>
        <td>Address</td>
      </tr>
    </thead>
  );
}

function CaseSummaryTable({ isAdmin, user, setErrorMessage, status, title }) {

  const currentPage = window.location.pathname;
  const [cases, setCases] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchData = async () => {
    try {

      const { data } = await axios.get(`${SERVER_URL}/case?${isAdmin ? '' : 'agentId=' + user._id}&status=${status}&sort=dateOpened&order=DESC`);
      setCases(data.saleCases ?? []);
      let t = 0;
      data.saleCases?.slice(0, 5).forEach(c => {
        if (c.commission?.amount) t += c.commission.amount;
      })
      setTotal(t);
      
    } catch (error) {

      setErrorMessage(error.response?.data.message || error.message);
      
    }
  }

  useEffect(() => {

    fetchData();

  }, [currentPage])

  return (
    <div className={'sales-container ' + (status || 'total')}>
      <div className="heading">
        <div className="left">
          <div className="name">{ title } Case</div>
          <div className="small">
            Total { cases.length } (showing max 5)
          </div>
          <Link to={`/case/all?status=${status}`}>See more</Link>
        </div>
        <div className="right">
          <div>Total Commission Amount</div>
          <div className="rm">RM { total }</div>
        </div>
      </div>
      <div className="table-container">
        <table>
          <Header />
          <tbody>
            {
              cases.slice(0, 5).map((c, i) => {
                return (
                  <tr key={i}>
                    <td>{ c.name || c._id }</td>
                    <td>{ c.property?.type || '-' }</td>
                    <td>{ c.status }</td>
                    <td>{ c.commission?.amount || '-' }</td>
                    <td>{ c.property?.address || '-' }</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CaseSummaryTable;
