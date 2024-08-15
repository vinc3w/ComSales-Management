import { useAuth } from "../../../hooks/useAuth";
import AppLayout from "../../../Components/AppLayout/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Help() {

	const [user] = useAuth();

  return (
    <AppLayout user={user}>
    <div id="Help">

      <div className="left">
        <div className="title">Contact Us</div>
        <div className="sub-title">Developer 1: Vincent Har</div>
        <table className="socials">
          <tbody>
            <tr>
              <td><a target="_blank" href="https://www.instagram.com/vinc3w59/"><FontAwesomeIcon icon={faInstagram} /></a></td>
              <td><a target="_blank" href="https://www.instagram.com/vinc3w59/">@vinc3w59</a></td>
            </tr>
            <tr>
              <td><a target="_blank" href="https://web.facebook.com/vincent.har.792"><FontAwesomeIcon icon={faFacebook} /></a></td>
              <td><a target="_blank" href="https://web.facebook.com/vincent.har.792">vincent.har.792</a></td>
            </tr>
            <tr>
              <td><a target="_blank" href="https://wa.me/0182021113"><FontAwesomeIcon icon={faWhatsapp} /></a></td>
              <td><a target="_blank" href="https://wa.me/0182021113">0182021113</a></td>
            </tr>
          </tbody>
        </table>
        <div className="sub-title">Developer 2: Rachel Lim</div>
        <table className="socials">
          <tbody>
            <tr>
              <td><a target="_blank" href="https://www.instagram.com/hxuaan_/"><FontAwesomeIcon icon={faInstagram} /></a></td>
              <td><a target="_blank" href="https://www.instagram.com/hxuaan_/">@hxuaan_</a></td>
            </tr>
            <tr>
              <td><a target="_blank" href="https://web.facebook.com/hanxuan.lim.9"><FontAwesomeIcon icon={faFacebook} /></a></td>
              <td><a target="_blank" href="https://web.facebook.com/hanxuan.lim.9">hanxuan.lim.9</a></td>
            </tr>
            <tr>
              <td><a target="_blank" href="https://wa.me/0123995766"><FontAwesomeIcon icon={faWhatsapp} /></a></td>
              <td><a target="_blank" href="https://wa.me/0123995766">0123995766</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="right">
        {/* <img src="/images/us/1.jpg" alt="developer image 1" />
        <img src="/images/us/3.jpg" alt="developer image 3" />
        <img src="/images/us/4.jpg" alt="developer image 4" /> */}
        <img src="/images/us/2.jpg" alt="developer image 2" />
        <img src="/images/us/5.jpg" alt="developer image 5" />
      </div>

    </div>
    </AppLayout>
  );
}

export default Help;
