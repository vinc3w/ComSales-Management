import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../../../config.json";
import axios from "axios";

import LoadingCircle from "../../../Components/LoadingCircle";
import AppLayout from "../../../Components/AppLayout/AppLayout";
import Form from "./Form";

function Employee() {

  const [user] = useAuth();
  const { userId } = useParams();
  const [message, setMessage] = useState({});
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  
  const fetchUser = async () => {
    try {
    
      setIsLoading(true);
      const { data } = await axios.get(`${SERVER_URL}/user?userId=${userId}`);
      setEmployee(data.user || {});
      setIsLoading(false);
      
    } catch (error) {

      console.log(error)
      setIsLoading(false);
      setMessage({
        type: 'error',
        message: error.response?.data.message || error.message
      });
      
    }
  }

  useEffect(() => {

    console.log(userId)
    if (!userId || userId === 'new') {
      setEmployee({});
      return;
    }
    if (userId === user._id) {
      setEmployee(user);
      return;
    }
    if (userId) fetchUser();

  }, [userId, refetch])


  return (
    <AppLayout user={user}>
    <div id="Employee">

      <div className={message.type + '-message'}>{ message.message }</div>
      {
        isLoading ? <div className="loading"><LoadingCircle /></div> : (  
          (!Object.entries(employee).length && userId !== 'new') ?
          <button className="button-primary" type="button" onClick={() => setRefetch(r => !r)}>Refresh</button> :
          <Form employee={employee} setMessage={setMessage} user={user} />
        )
      }

    </div>
    </AppLayout>
  );
}

export default Employee;
