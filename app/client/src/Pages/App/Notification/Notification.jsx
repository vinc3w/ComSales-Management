import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";
import { SERVER_URL } from "../../../config.json";
import AppLayout from "../../../Components/AppLayout/AppLayout";
import List from "./List";

function Notification() {

	const [user] = useAuth();
  const {errorMessage, setErrorMessage} = useState('');
  const [count, setCount] = useState(null);
  const [refetch, setRefetch] = useState(true);

  const deleteAll = async () => {
    try {

      await axios.delete(`${SERVER_URL}/notification/all?user=${user._id}`);
      setRefetch(!refetch);
      
    } catch (error) {

      setErrorMessage(error.response?.data.message || error.message);
      
    }
  }

  return (
    <AppLayout user={user} notificationCount={count}>
    <div id="Notification">

      <div className="error-message">{ errorMessage }</div>

      <header>
        <div className="title">Inbox <span>{ count && <b>{ count }</b> }</span></div>
        { count !== null && count !== 0 && <button className="button-error delete-all" onClick={deleteAll}>Delete All</button> }
      </header>

      <List user={user} setCount={setCount} count={count} setErrorMessage={setErrorMessage} refetch={refetch} setRefetch={setRefetch} />

    </div>
    </AppLayout>
  );
}

export default Notification;
