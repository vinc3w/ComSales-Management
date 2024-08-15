import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../../config.json";

function MappedUser({ u }) {

  return (
    <div className="user">
      <div className="profile-image">
        <img src={u.profileImage ? `${SERVER_URL}${u.profileImage}` : '/images/profile.png'} alt="" />
      </div>
      <div className="name">
        <div className="username">{ u.username }</div>
        <div className="email">{u.email}</div>
        <div className="email">{u.NRICNo}</div>
      </div>
      <div className="position">{ u.isAdmin ? 'Admin' : 'Employee' }</div>
      <div className="edit">
        <Link to={`/admin/employee/${u._id}`}>
          <FontAwesomeIcon icon={faGear} />
        </Link>
      </div>
    </div>
  );
}

export default MappedUser;
