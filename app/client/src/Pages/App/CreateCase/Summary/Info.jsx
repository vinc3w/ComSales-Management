import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Info({ saleCase }) {

  const people = type => {
    const ps = type === 'seller' ?
      (saleCase[saleCase.property.type === 'sale' ?  'ownerAuthorizationToSaleForm' : 'ownerAuthorizationToRentForm']?.signature) :
      (saleCase[saleCase.property.type === 'sale' ?  'offerToPurchaseForm' : 'offerToRentForm']?.signature.purchaser);
    delete ps?.witness;
    return ps ? Object.entries(ps)?.map((p, i) => Object.values(p[1]).filter(i => i).length ? (
      <table key={i}>
      <tbody>
        <tr>
          <td className="label">Full Name</td>
          <td className="value">{ p[1].name }</td>
        </tr>
        <tr>
          <td className="label">NRIC No</td>
          <td className="value">{ p[1].NRICNo }</td>
        </tr>
        <tr>
          <td className="label">H/P No</td>
          <td className="value">{ p[1].telNo }</td>
        </tr>
      </tbody>
      </table>
    ) : null) : null;
  }
  
  return (
      <div className="info">

        <div className="header">
          <FontAwesomeIcon icon={faCircleInfo} />
          Property Info
        </div>

        <div className="short-info">
          <div className="left">
            <table>
              <tbody>
                <tr>
                  <td className="label">Case Number</td>
                  <td className="value">{ saleCase._id }</td>
                </tr>
                <tr>
                  <td className="label">Type</td>
                  <td className="value">{ saleCase.property?.type ? saleCase.property?.type[0].toUpperCase() + saleCase.property.type.slice(1) : '' }</td>
                </tr>
                <tr>
                  <td className="label">Address</td>
                  <td className="value">{ saleCase.property?.address || '-' }</td>
                </tr>
                <tr>
                  <td className="label">Status</td>
                  <td><div className={'value status ' + saleCase.status}>{ saleCase.status }</div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right">
            <table>
              <tbody>
                <tr>
                  <td className="label">Date Opened</td>
                  <td className="value">{ saleCase.dateOpened ? new Date(saleCase.dateOpened).toLocaleDateString() : '-' }</td>
                </tr>
                <tr>
                  <td className="label">Date Closed</td>
                  <td className="value">{ saleCase.dateClosed ? new Date(saleCase.dateClosed).toLocaleDateString() : '-' }</td>
                </tr>
                {
                  saleCase.property.type === 'sale' ?
                  <tr>
                    <td className="label">Commission</td>
                    <td className="value">{ saleCase.ownerAuthorizationToSaleForm?.landAndBuildingFee || '-' }%</td>
                  </tr>:
                  <>
                  <tr>
                    <td className="label">Tenancy Start</td>
                    <td className="value">{ saleCase.offerToRentForm?.termsAndConditions?.tenancyCommencementDate ? new Date(saleCase.offerToRentForm?.termsAndConditions?.tenancyCommencementDate).toLocaleDateString() : '-' }</td>
                  </tr>
                  <tr>
                    <td className="label">Tenancy Period</td>
                    <td className="value">{ saleCase.offerToRentForm?.termsAndConditions?.periodOfTenancyIn?.year ? saleCase.offerToRentForm?.termsAndConditions?.periodOfTenancyIn?.year + ' Years' : '-' }</td>
                  </tr>
                  </>
                }
                <tr>
                  <td className="label">{ saleCase.property.type === 'sale' ? 'Sale' : 'Rent' } Amount</td>
                  <td className="value">RM { saleCase.commission?.amount ? (saleCase.commission?.amount).toFixed(2) : '-' }</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="people">
          <div className="seller">
            <div className="title"><b>Seller</b></div>
            { people('seller') }
          </div>
          <div className="buyer">
            <div className="title"><b>Buyer</b></div>
            { people('buyer') }
          </div>
        </div>

      </div>
  );
}

export default Info;
