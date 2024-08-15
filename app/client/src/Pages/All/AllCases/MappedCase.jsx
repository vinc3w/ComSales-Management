import { Link } from "react-router-dom";
import { SST_PERCENTAGE } from "../../../config.json"

function MappedCase({ c }) {

  return (
    <tr className="case">
      <td>
        <Link to={`/case/create/${c._id}`}>{ c.name || c._id }</Link>
      </td>
      <td>{ c.agentName || '-' }</td>
      <td>
        { c.ownerName || '-' }
      </td>
      <td>
        { c.buyerName || '-' }
      </td>
      <td>{ c.property?.type || '-' }</td>
      <td>{ c.property?.address || '-' }</td>
      <td>{ c.status }</td>
      <td>{ c.dateOpened && new Date(c.dateOpened).toLocaleDateString() }</td>
      <td>{ c.dateClosed ? new Date(c.dateClosed).toLocaleDateString() : '-' }</td>
      <td>{ c.commission?.amount || '-' }</td>
    </tr>
  );
}

export default MappedCase;
