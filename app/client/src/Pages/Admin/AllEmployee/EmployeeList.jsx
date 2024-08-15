import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SERVER_URL } from "../../../config.json";
import axios from "axios";

import MappedUser from "./MappedUser";
import LoadingCircle from "../../../Components/LoadingCircle";
import Pagination from "../../../Components/Pagination";

function EmployeeList({ setCount, count }) {

  const { page=1 } = useParams();
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {

    const fetchUsers = async () => {
      try {

        let url = `${SERVER_URL}/user/all?`;
        for (const [k, v] of searchParams.entries()) if (v) url += `&${k}=${v}`;
        
        setIsLoading(true);
        const { data } = await axios.get(url);
        setUsers(data.users ?? []);
        setCount(data.users?.length);
        setIsLoading(false);
        
      } catch (error) {

        setErrorMessage(error.response?.data.message || error.message);
        
      }
    }

    fetchUsers();
    
  }, [searchParams, page])

  return (
    <div className="user-container">
      <div className="error-message">{ errorMessage }</div>
      <div className="user-list">
        {
          !isLoading &&
          users.map((u, i) => <MappedUser u={u} key={i} />)
        }
      </div>
      {
        isLoading &&
        <div className="loading">
          <LoadingCircle />
        </div>
      }
      {
        !isNaN(parseInt(page)) && count !== 0 &&
        <Pagination pageType="admin/employee/all" page={parseInt(page)} count={count} />
      }
    </div>
  );
}

export default EmployeeList;
