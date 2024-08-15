import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { SERVER_URL } from "../../config.json";
import getCookie from "../../utils/getCookie";
import { useAuth } from "../../hooks/useAuth";

function Logout() {

  const [user, _, getUser] = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {

      await axios.delete(`${SERVER_URL}/auth/logout?token=${getCookie('token')}`);
      document.cookie = 'token=; Max-Age=0'
      getUser();
      navigate('/login', { replace: true });
      
    } catch (error) {
      
      console.log(error);

    }
  }

  return (
    <button onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} />Log Out</button>
  );
}

export default Logout;
