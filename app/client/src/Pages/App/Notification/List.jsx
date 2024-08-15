import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../../config.json";
import NotificationElement from "./NotificationElement";
import NoNotification from "./NoNotification";
import Pagination from "../../../Components/Pagination";

function List({ user, setCount, count, setErrorMessage, refetch, setRefetch }) {

  const { page=1 } = useParams();
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {

      if (isNaN(parseInt(page))) return;
      const { data } = await axios.get(`${SERVER_URL}/notification/all?userId=${user._id}&page=${page || 1}`);
      setNotifications(data.notifications);
      setCount(data.count);
      
    } catch (error) {

      setErrorMessage(error.response?.data.message || error.message);
      
    }
  }

  useEffect(() => {

    fetchNotifications();

  }, [page, refetch])

  return notifications.length ?
    (
      <div className="notification-list">
        <div className="list">
          {
            notifications.map((n, i) => (
              <NotificationElement
                key={i}
                n={n}
                setErrorMessage={setErrorMessage}
                refetch={refetch}
                setRefetch={setRefetch} />
            ))
          }
        </div>
        {
          !isNaN(parseInt(page)) && count !== 0 &&
          <Pagination pageType="notification" page={parseInt(page)} count={count} />
        }
      </div>
    ) :
    <NoNotification />;
}

export default List;
