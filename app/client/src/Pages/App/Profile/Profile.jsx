import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";

import { SERVER_URL, COMPANY_EMAIL, COMPANY_ADDRESS } from "../../../config.json";
import AppLayout from "../../../Components/AppLayout/AppLayout";
import LoadingCircle from "../../../Components/LoadingCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faUser } from "@fortawesome/free-solid-svg-icons";

function Profile() {

	const [user] = useAuth();
  const [userFetch, setUserFetch] = useState(null);

  useEffect(() => {

    const getUser = async () => {
      try {
  
        const { data } = await axios.get(`${SERVER_URL}/user?userId=${user._id}`);
        setUserFetch(data.user);
          
      } catch (error) {
          
        setUserFetch(null);
          
      }
    }

    getUser();

  }, [])

	return (
		<AppLayout user={user}>
		<div id="profile">

			{
				userFetch ?
				<>
				<div className="title">
					<FontAwesomeIcon icon={faAddressCard} />
					Name Card
				</div>
				<div className="name-card">
					<div className="top">
						<div className="profile-image">
							<img src={userFetch.profileImage ? SERVER_URL + userFetch.profileImage : '/images/profile.png'} alt="profile image" />
						</div>
						<div className="right">
							<div className="name">{ userFetch.nameCard.name }</div>
							<div>{ userFetch.nameCard.RenNo }</div>
							<div>{ userFetch.nameCard.title }</div>
						</div>
					</div>
					<div className="bottom">
						<table className="bottom-content">
							<tbody>
								<tr>
									<td>H/P No.</td>
									<td>:</td>
									<td>{ userFetch.nameCard.HPNo }</td>
								</tr>
								<tr>
									<td>Company Email</td>
									<td>:</td>
									<td>{ COMPANY_EMAIL }</td>
								</tr>
								<tr>
									<td>Personal Email</td>
									<td>:</td>
									<td>{ userFetch.nameCard.email }</td>
								</tr>
								<tr>
									<td>Company Address</td>
									<td>:</td>
									<td>{ COMPANY_ADDRESS }</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="title">
					<FontAwesomeIcon icon={faUser} />
					Agent Details
				</div>
				<div className="profile" style={{backgroundColor: userFetch.sex === 'male' ? '#c0d0ef' : '#eacbc2'}}>
					<div className="profile-top">
						<div className="name">{ userFetch.username }</div>
					</div>
					<div className="bottom">
						<div>
							<div className="label">Ren No. :</div>
							<div>{ userFetch.nameCard.RenNo }</div>
						</div>
						<div>
							<div>Mobile Number:</div>
							<div>{ userFetch.HPNo }</div>
						</div>
						<div>
							<div>Email:</div>
							<div>{ userFetch.email }</div>
						</div>
						<div>
							<div>Address:</div>
							<div>{ userFetch.address }</div>
						</div>
						<div>
							<div>NRIC No. :</div>
							<div>{ userFetch.NRICNo }</div>
						</div>
						<div>
							<div>Sex:</div>
							<div>{ userFetch.sex }</div>
						</div>
					</div>
				</div>
				{
					user.isAdmin &&
					<Link className="button-primary edit" to={`/admin/employee/${userFetch._id}`}>Edit</Link>
				}
				</> :
				<LoadingCircle />
			}

		</div>
		</AppLayout>
	);
}

export default Profile;
