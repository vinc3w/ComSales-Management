import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import AppLayout from "../../../Components/AppLayout/AppLayout";
import CreateCaseLink from "../../App/Components/CreateCaseLink";
import CaseList from "./CaseList";
import Filter from "./Filter";

function AllCases({ isAdmin }) {

  const [user] = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [count, setCount] = useState(null);

  return (
		<AppLayout user={user} topContent={<CreateCaseLink />}>
		<div id="AllCases"> 
      
      <Filter />

      <div className="error-message">{ errorMessage }</div>
      <div className="header">
        <div className="title">{ isAdmin ? 'Total' : 'My' } Cases</div>
      </div>

      <CaseList isAdmin={isAdmin} user={user} setErrorMessage={setErrorMessage} count={count} setCount={setCount} />

		</div>
		</AppLayout>
  );
}

export default AllCases;
