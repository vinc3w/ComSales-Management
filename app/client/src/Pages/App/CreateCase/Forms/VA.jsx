import { useId } from "react";
import convertToDateTimeLocalString from "../../../../utils/convertToDateTimeLocalString";
import { COMPANY_NAME } from "../../../../config.json";

function VA({ formData, caseNo }) {

  return (
    <div className="va">

      <div className="form-top">
        <div className="caseNo">
          <div className="label">CaseNo:</div>
          <div className="value"><b>{ caseNo }</b></div>
        </div>
      </div>

      <div className="title">Viewer's Acknowledgement</div>
      
      <table>
        <tbody>
          <tr className="input">
            <td className="label"><div>Viewer's Name</div></td>
            <td className="colon">:</td>
            <td><input type="text" name="viewerName" defaultValue={formData?.viewerName} key={useId()} /></td>
          </tr>
          
          <tr className="input">
            <td className="label"><div>NRIC No.</div></td>
            <td className="colon">:</td>
            <td><input type="text" name="NRICNo" defaultValue={formData?.NRICNo} key={useId()} /></td>
          </tr>
          
          <tr className="input">
            <td className="label"><div>Current Address</div></td>
            <td className="colon">:</td>
            <td><input type="text" name="currentAddress" defaultValue={formData?.currentAddress} key={useId()} /></td>
          </tr>
          
          <tr className="input">
            <td className="label"><div>Telephone No</div></td>
            <td className="colon">:</td>
            <td><input type="text" name="telephoneNo" defaultValue={formData?.telephoneNo} key={useId()} /></td>
          </tr>
          
          <tr className="input">
            <td className="label"><div>Time</div></td>
            <td className="colon">:</td>
            <td><input type="datetime-local" name="time" defaultValue={formData?.time && convertToDateTimeLocalString(new Date(formData?.time))} key={useId()} /></td>
          </tr>
          
          <tr className="input">
            <td className="label"><div>Car Plate No.</div></td>
            <td className="colon">:</td>
            <td><input type="text" name="carPlateNo" defaultValue={formData?.carPlateNo} key={useId()} /></td>
          </tr>
          
          <tr className="input">
            <td className="label"><div>Address of Property to be view</div></td>
            <td className="colon">:</td>
            <td><input type="text" name="propertyToBeViewedAddress" defaultValue={formData?.propertyToBeViewedAddress} key={useId()} /></td>
          </tr>
        </tbody>
      </table>

      <div className="p1">This is to acknowledge that, I/we have been introduced to the above property nd have viewed it / will view it through <b>{ COMPANY_NAME }</b>. I/We understand that should I/we be interested in purchasing/renting the above property, I/we wil negotiate with the owner(s) through <b>{ COMPANY_NAME }</b>.</div>
      <div className="p2">(By providing the information on this form, you consent the use and disclosure of your personal information for the purpose of receiving invitations, emails, SMS, letters, flyers announcement of property launches, properties listings for sale/rent and wanted and marketing communications materials.)</div>

    </div>
  )
}

export default VA;
