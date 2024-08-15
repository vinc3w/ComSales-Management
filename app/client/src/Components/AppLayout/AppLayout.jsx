import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Breadcrumbs from "./Breadcrumbs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function AppLayout({ user, children, topContent, notificationCount, saleCases }) {

	const [hideSidebar, setHideSidebar] = useState(localStorage.hideSidebar === 'true' || false);
	
	const showSidebar = () => {
		setHideSidebar(s => !s);
		localStorage.hideSidebar = false;
	}

	return (
		<div id="App">

			<Sidebar user={user} setHideSidebar={setHideSidebar} hideSidebar={hideSidebar} notificationCount={notificationCount} saleCases={saleCases} />
			<div className={'content ' + (hideSidebar ? 'move' : '')}>
				<div className="top">
					<div className="left">
						<button className={'show-button ' + (hideSidebar ? 'show' : '')} onClick={showSidebar}>
							<FontAwesomeIcon icon={faBars} />
						</button>
						<Breadcrumbs />
					</div>
					{ topContent }
				</div>
				<div className="page">{ children }</div>
			</div>

		</div>
	);
}

export default AppLayout;
