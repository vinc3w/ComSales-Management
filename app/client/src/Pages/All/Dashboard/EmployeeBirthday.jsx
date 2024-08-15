import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../config.json";

function parseDate(date) {
  var mdy = (new Date(date).toLocaleString().split('/').slice(0, 2).join('/') + '/' + new Date().getFullYear()).split('/');
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function daysFromDate(date) {
  return Math.round(
    (parseDate(date) - new Date()) / (1000 * 60 * 60 * 24)
  ) + 1 // number of days offset by 1 day
}

function EmployeeBirthday({ user, setErrorMessage }) {

  const [employee, setEmployee] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const wish = async e => {
    try {

      if (daysFromDate(e.dob) !== 0) return;
      await axios.post(`${SERVER_URL}/notification/hbd`, {
        senderId: user._id,
        receiverId: e._id
      });
      
    } catch (error) {
      
      setErrorMessage(error.response?.data.message || error.message);

    }
  }

  const fetchEmployees = async () => {
    try {

      if (isLoading) return;
      setIsLoading(true);
      const { data } = await axios.get(`${SERVER_URL}/user/all`);
      setEmployee(
        data.users
        // filter all employees with birthdya on today's month
        .filter(i => new Date(i.dob).getMonth() === new Date().getMonth())
      );
      setIsLoading(false);
      
    } catch (error) {
      
      setIsLoading(false);
      setErrorMessage(error.response?.data.message || error.message);

    }
  }

  useEffect(() => {

    fetchEmployees();

  }, [])

  return (
    <div className="employee-birthday">

      <div className="title"><b>Birthday 🎂</b></div>

      {
        employee.length ?
        <table>
          <tbody>
            {
              employee.map((e, i) => e.dob ? (
                <tr key={i} onClick={() => wish(e)}>
                  <td><b>{ e.username }</b></td>
                  <td>{ new Date(e.dob).toLocaleDateString() }</td>
                  <td className={daysFromDate(e.dob) === 0 ? 'today' : (daysFromDate(e.dob) > 0 ? 'coming' : 'over')}>
                  <b>
                    {
                      daysFromDate(e.dob) === 0 ?
                      'TODAY' :
                      daysFromDate(e.dob) + ' Days Left'
                    }
                  </b>
                  </td>
                </tr>
              ) : '')
            }
          </tbody>
        </table> :
        <div className="empty">No Employee Birthdays This Month</div>
      }

    </div>
  );
}

export default EmployeeBirthday;
