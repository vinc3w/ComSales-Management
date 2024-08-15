import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, PieChart } from "@mui/x-charts";
import { SERVER_URL } from "../../../config.json";
import LoadingCircle from "../../../Components/LoadingCircle";

function Commission({ isAdmin, user, setErrorMessage }) {

  const currentPage = window.location.pathname;
  const [monthlyCommission, setMonthlyCommission] = useState([]);
  const [totalSaleCommission, setTotalSaleCommission] = useState(null);
  const [totalRentCommission, setTotalRentCommission] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sortByMonth = cases => {
    const months = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0 };
    for (const c of cases) {
      if (!c.commission?.amount) continue;
      if (months[new Date(c.dateOpened).getUTCMonth()]) months[new Date(c.dateOpened).getUTCMonth()] += c.commission.amount;
      else months[new Date(c.dateOpened).getUTCMonth()] = c.commission.amount;
    }
    return Object.values(months);
  }

  const fetchCases = async () => {
    try {

      if (isLoading) return;
      setIsLoading(true);
      const { data } = await axios.get(`${SERVER_URL}/case?${isAdmin ? '' : 'agentId=' + user._id}`);
      let totalSaleCommission = 0;
      let totalRentCommission = 0;
      data.saleCases.forEach(c => {
        if (!c.commission?.amount) return;
        if (c.property.type === 'sale') totalSaleCommission += c.commission.amount;
        else  totalRentCommission += c.commission.amount;
      })
      setTotalSaleCommission(totalSaleCommission);
      setTotalRentCommission(totalRentCommission);
      setMonthlyCommission(sortByMonth(data.saleCases));
      setIsLoading(false);
      
    } catch (error) {

      setIsLoading(false);
      setErrorMessage(error.response?.data.message || error.message);
      
    }
  }

  useEffect(() => {

    fetchCases();

  }, [currentPage])
  
  return (
    <div className="commission">

      {
        isLoading ?
        <LoadingCircle /> :
        <>
        <section>
          <div className="title">Annual Commission</div>
          <div className="chart">
            <LineChart
              xAxis={[{
                scaleType: 'point',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
              }]}
              series={[{ data: monthlyCommission }]}
              width={500}
              height={300}
              margin={{ left: 65 }}
            />
          </div>
        </section>
        <section>
          <div className="title">What Make Up the Total Commission</div>
          <div className="chart">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: totalSaleCommission, label: 'Sale' },
                    { id: 1, value: totalRentCommission, label: 'Rent' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </section>
        </>
      }

    </div>
  );
}

export default Commission;
