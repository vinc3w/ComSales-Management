import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../config.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faUserClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Employee({ setErrorMessage }) {

  const [totalCount, setTotalCount] = useState(null);
  const [FTCount, setFTCount] = useState(null);
  const [PTCount, setPTCount] = useState(null);

  const fetchEmployees = async () => {
    try {

      const { data } = await axios.get(`${SERVER_URL}/user/all`);
      setTotalCount(data.count);
      setFTCount(data.users.filter(i => i.type === 'fullTime').length);
      setPTCount(data.users.filter(i => i.type === 'partTime').length);
      
    } catch (error) {

      setErrorMessage(error.response?.data.message || error.message);
      
    }
  }

  useEffect(() => {

    fetchEmployees();

  }, [])
  
  return (
    <div className="employee">

      <section>
        <FontAwesomeIcon icon={faUserGroup} />
        <div>
          <div className="label">Active REN</div>
          <div className="count"><b>{ totalCount }</b></div>
        </div>
      </section>

      <section>
        <FontAwesomeIcon icon={faUserClock} />
        <div>
          <div className="label">Part Time REN</div>
          <div className="count"><b>{ PTCount }</b></div>
        </div>
      </section>

      <section>
        <FontAwesomeIcon icon={faClockFour} />
        <div>
          <div className="label">Full Time REN</div>
          <div className="count"><b>{ FTCount }</b></div>
        </div>
      </section>

    </div>
  );
}

export default Employee;
