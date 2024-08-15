import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { SERVER_URL } from "../../../config.json";
import timeAgo from "../../../utils/timeAgo";
import { useState } from "react";
import LoadingCircle from "../../../Components/LoadingCircle";

function NotificationElement({ n, setErrorMessage, refetch, setRefetch }) { // TODO: Loading animation when delete button clciked

  const [isLoading, setIsLoading] = useState(false);

  const deleteN = async () => {
    try {

      if (isLoading) return;
      setIsLoading(true);
      await axios.delete(`${SERVER_URL}/notification?id=${n._id}`);
      setRefetch(!refetch);
      setIsLoading(false);
      
    } catch (error) {

      setIsLoading(false);
      setErrorMessage(error.response?.data.message || error.message);
      
    }
  }

  return (
    <div className="notification">
      <div className="profile-image">
        <img src={n.sender?.profileImage ? `${SERVER_URL}${n.sender.profileImage}` : '/images/profile.png'} alt="" />
      </div>
      <div className="message">
        <div><b>{ n.sender?.username }</b> { n.message }</div>
        <div className="time">{ timeAgo(new Date(n.createdAt)) }</div>
      </div>
      <button className="delete" onClick={deleteN}>
        {
          isLoading ?
          <LoadingCircle /> :
          <FontAwesomeIcon icon={faTrashCan} />
        }
      </button>
    </div>
  );
}

export default NotificationElement;
