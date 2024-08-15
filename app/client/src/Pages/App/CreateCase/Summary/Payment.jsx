import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SST_PERCENTAGE } from "../../../../config.json";

function Payment({ saleCase }) {

  const amount = saleCase.property?.type === 'sale' ?
    saleCase.ownerAuthorizationToSaleForm?.propertyPriceIn?.RM * (saleCase.ownerAuthorizationToSaleForm?.landAndBuildingFee / 100) :
    saleCase.commission?.amount;

  return (
    <div className="payment">

      <div className="header">
        <FontAwesomeIcon icon={faCircleInfo} />
        Payment & Commission
      </div>

      <div className="text">
        {
          saleCase.property.type === 'sale' ?
          <>
          RM { saleCase.ownerAuthorizationToSaleForm?.propertyPriceIn?.RM } x { saleCase.ownerAuthorizationToSaleForm?.landAndBuildingFee }% = <b>{ amount ? (amount).toFixed(2) : '-' }</b>
          </> :
          <>
          <b>RM { amount ? (amount).toFixed(2) : '-'  }</b>
          </>
        }
      </div>

      <div className="calculation">
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td>Tax Handling</td>
                <td><b>Paid By Client</b></td>
              </tr>
              <tr>
                <td>Amount</td>
                <td className="blue">{ amount ? (amount).toFixed(2) : '-' }</td>
              </tr>
              <tr>
                <td>Dedux Tax (8% SST)</td>
                <td className="red">{ amount ? (amount * (SST_PERCENTAGE/100)).toFixed(2) : '-' }</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td className="subtotal" colSpan={3}>
                  <div>
                    <b>Subtotal</b>
                    <b>{ amount ? amount.toFixed(2) : '-' }</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Company</td>
                <td className="percentage"><i>40%</i></td>
                <td className="red">{ amount ? (amount * 0.4).toFixed(2) : '-' }</td>
              </tr>
              <tr>
                <td>Commission</td>
                <td className="percentage"><i>40%</i></td>
                <td className="blue">{ amount ? (amount * 0.4).toFixed(2) : '-' }</td>
              </tr>
              <tr>
                <td>Bonus</td>
                <td className="percentage"><i>20%</i></td>
                <td className="blue">{ amount ? (amount * 0.2).toFixed(2) : '-' }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="total">
        <div className="label">Total Commission</div>
        <div className="value"><b>RM { amount ? (amount * 0.6).toFixed(2) : '-' }</b></div>
      </div>

    </div>
  );
}

export default Payment