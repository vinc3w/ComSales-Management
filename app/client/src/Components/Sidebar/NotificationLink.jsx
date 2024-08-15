import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { SERVER_URL } from "../../config.json";

function NotificationLink({ user , notificationCount }) {

  const [count, setCount] = useState(notificationCount);

  const fetchCount = async () => {
    try {

      const { data } = await axios.get(`${SERVER_URL}/notification/all?userId=${user._id}`);
      setCount(data.count);
      
    } catch (error) {

      
    }
  }

  useEffect(() => {

    if (count === undefined) fetchCount();

  }, [])

  useEffect(() => {
    
    setCount(notificationCount);

  }, [notificationCount])

  return (
    <Link to="/notification">
      <FontAwesomeIcon icon={faBell} />
      Notification
      <div className="count">{ count > 0 && <b>{ count }</b> }</div>
    </Link>
  );
}

export default NotificationLink;
