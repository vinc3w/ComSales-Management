import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import AppLayout from "../../../Components/AppLayout/AppLayout";
import EmployeeList from "./EmployeeList";
import Filter from "./Filter";

function AllEmployee() {

  const [user] = useAuth();
  const [count, setCount] = useState(null);

  return (
    <AppLayout user={user}>
    <div id="AllEmployee">

      <Filter />

      <header>
        <div className="title">Employees</div>
        <div className="right">
          {
            count &&
            <div>
              <span className="count">{ count }</span>&nbsp;
              employees
            </div>
          }
          <Link to="/admin/employee/new" className="button-primary">
            <FontAwesomeIcon icon={faAdd} />
            Add Employee
          </Link>
        </div>
      </header>

      <EmployeeList setCount={setCount} count={count} />

    </div>
    </AppLayout>
  );
}

export default AllEmployee;
