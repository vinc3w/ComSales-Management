import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import AppLayout from "../../../Components/AppLayout/AppLayout";
import CreateCaseLink from "../../App/Components/CreateCaseLink";
import Commission from "./Commission";
import Employee from "./Employee";
import EmployeeBirthday from "./EmployeeBirthday";
import CaseSummaryTable from "./CaseSummaryTable";

function Dashboard({ isAdmin }) {

	const [user] = useAuth();
	const [errorMessage, setErrorMessage] = useState('');

	return (
		<AppLayout user={user} topContent={<CreateCaseLink />}>
		<div id="dashboard">

			<div className="error-message">{ errorMessage }</div>
			{ isAdmin && <Employee setErrorMessage={setErrorMessage} /> }
					<Commission isAdmin={isAdmin} user={user} setErrorMessage={setErrorMessage} />

			<section className="case-summary">

				<div className="content-left">
					<CaseSummaryTable isAdmin={isAdmin} user={user} setErrorMessage={setErrorMessage} status="pending" title="Pending" />
					<CaseSummaryTable isAdmin={isAdmin} user={user} setErrorMessage={setErrorMessage} status="approved" title="Approved" />
					<CaseSummaryTable isAdmin={isAdmin} user={user} setErrorMessage={setErrorMessage} status="completed" title="Completed" />
				</div>

				<div className="content-right">
					<EmployeeBirthday user={user} setErrorMessage={setErrorMessage} />
					<CaseSummaryTable user={user} setErrorMessage={setErrorMessage} status="" title="Total" />
				</div>

    </section>

		</div>
		</AppLayout>
	);
}

export default Dashboard;
