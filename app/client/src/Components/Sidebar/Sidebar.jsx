import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTableList, faBars, faChartLine, faUsers, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import Cases from './Cases';
import Logout from './Logout';
import NotificationLink from './NotificationLink';

function Sidebar({ user, setHideSidebar, hideSidebar, notificationCount, saleCases }) {

  const hide = () => {
    setHideSidebar(true);
		localStorage.hideSidebar = true;
  }

  return (
    <div className={'sidebar ' + (!hideSidebar ? 'show' : '')}>

      <div className="top">

        <Link to="/dashboard" className="title">
          <img src="/images/logo.png" alt="Logo" />
          <div>ComSalesM</div>
        </Link>

        <button className="hide-button" onClick={hide}>
          <FontAwesomeIcon icon={faBars} />
        </button>

      </div>

      <nav>
        <ul>
          <li className="heading">Pages</li>
          <li><Link to="/dashboard"><FontAwesomeIcon icon={faHome} />Dashboard</Link></li>
          <li><Link to="/case/all"><FontAwesomeIcon icon={faTableList} />Cases</Link></li>
          <li><Link to="/profile"><FontAwesomeIcon icon={faUser} />Profile</Link></li>
          <li><NotificationLink user={user} notificationCount={notificationCount} /></li>
        </ul>
        {
          user?.isAdmin &&
          <ul>
            <li className="heading">Admin</li>
            <li><Link to="/admin/employee/all"><FontAwesomeIcon icon={faUsers} />Employees</Link></li>
            <li><Link to="/admin/dashboard"><FontAwesomeIcon icon={faChartLine} />Dashboard</Link></li>
            <li><Link to="/admin/case"><FontAwesomeIcon icon={faTableList} />Cases</Link></li>
          </ul>
        }
      </nav>

      <Cases user={user} saleCases={saleCases} />

      <nav className="bottom">
        <ul>
          <li><Link to="/help"><FontAwesomeIcon icon={faCircleQuestion} />Help</Link></li>
          <li><Logout /></li>
        </ul>
      </nav>

    </div>
  );
}

export default Sidebar;
