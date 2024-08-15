import { useSearchParams } from "react-router-dom";
import { Form } from "react-router-dom";
import Dropdown from "../../../Components/Dropdown";

function Filter() {

  const [searchParams] = useSearchParams();
  
  return (
    <div className="filter">

      <div className="show-button" onClick={e => e.target.nextSibling.classList.toggle('show')}>Filter</div>

      <Form className="filter-content">

        <Dropdown
          label="Status"
          name="isAdmin"
          defaultValue={searchParams.get('status') ?? 'All'}
          options={[
            { label: 'All', value: null },
            { label: 'Employee', value: false },
            { label: 'Admin', value: true }
          ]}
        />

        <div className="filter-input">
          <div className="label">Name</div>
          <input type="text" name="username" defaultValue={searchParams.get('username')} />
        </div>

        <div className="filter-input">
          <div className="label">Email</div>
          <input type="text" name="email" defaultValue={searchParams.get('email')} />
        </div>

        <div className="filter-input">
          <div className="label">NRIC No.</div>
          <input type="text" name="NRICNo" defaultValue={searchParams.get('NRICNo')} />
        </div>

        <button className="button-primary">Apply</button>

      </Form>

    </div>
  );
}

export default Filter;
