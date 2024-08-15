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
          name="status"
          defaultValue={searchParams.get('status')}
          options={[
            { label: 'None', value: null },
            { label: 'Pending', value: 'pending' },
            { label: 'Approved', value: 'approved' },
            { label: 'Completed', value: 'completed' }
          ]}
        />

        <Dropdown
          label="Property Type"
          name="propertyType"
          defaultValue={searchParams.get('propertyType')}
          options={[
            { label: 'None', value: null },
            { label: 'Sale', value: 'sale' },
            { label: 'Rent', value: 'rent' }
          ]}
        />

        <div className="filter-input">
          <div className="label">Address</div>
          <input type="text" name="propertyAddress" defaultValue={searchParams.get('propertyAddress')} />
        </div>

        <div className="filter-input">
          <div className="label">Agent Name</div>
          <input type="text" name="agentName" defaultValue={searchParams.get('agentName')} />
        </div>

        <div className="filter-input">
          <div className="label">Owner Name</div>
          <input type="text" name="ownerName" defaultValue={searchParams.get('ownerName')} />
        </div>

        <div className="filter-input">
          <div className="label">Buyer Name</div>
          <input type="text" name="buyerName" defaultValue={searchParams.get('buyerName')} />
        </div>

        <div className="filter-input">
          <div className="label">Date Opened</div>
          <input type="date" name="dateOpened" defaultValue={searchParams.get('dateOpened')} />
        </div>

        <div className="filter-input">
          <div className="label">Date Closed</div>
          <input type="date" name="dateClosed" defaultValue={searchParams.get('dateClosed')} />
        </div>

        <div className="filter-input">
          <div className="label">Min Commission Amount</div>
          <input type="number" name="minCommission" defaultValue={searchParams.get('minCommission')} />
        </div>

        <div className="filter-input">
          <div className="label">Max Commission Amount</div>
          <input type="number" name="maxCommission" defaultValue={searchParams.get('maxCommission')} />
        </div>

        <button className="button-primary">Apply</button>

      </Form>

    </div>
  );
}

export default Filter;
