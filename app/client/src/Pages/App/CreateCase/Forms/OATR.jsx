import { useId } from "react";
import { COMPANY_NAME, COMPANY_ADDRESS, SST_PERCENTAGE } from "../../../../config.json";
import convertToDateTimeLocalString from "../../../../utils/convertToDateTimeLocalString";

function OATR({ formData, caseNo }) {

  return (
    <div className="oatr">

      <div className="form-top">
        <div className="input">
          <div className="label">Date: </div>
          <input type="date" name="date" defaultValue={formData?.date && convertToDateTimeLocalString(new Date(formData?.date))} key={useId()} />
        </div>
        <div className="caseNo">
          <div className="label">CaseNo:</div>
          <div className="value"><b>{ caseNo }</b></div>
        </div>
      </div>

      <b>{ COMPANY_NAME }</b>
      <div className="address">{ COMPANY_ADDRESS }</div>

      <div className="dear">Dear Sirs,</div>

      <div className="title"><b><u>RE: AUTHORIZATION LETTER FROM OWNER (RENT)</u></b></div>

      <div className="address-input"><b>PROPERTY ADDRESS: <textarea name="propertyAddress" defaultValue={formData.propertyAddress}  key={useId()} /></b> (hereinafter called the "<b>SAID PROPERTY</b>")</div>

      <div className="p1">I/We the undersigned being the Registered Owner(s) of the above state property do hereby appoint you as our Real Estate Agent on an <b>solve and exclusive agency</b> basis to act on my our behalf to rent the said property. I/We also authorize you to display signboards, to advertise in any media, or in any form to promote the rent of the said property subject to the following terms:-</div>

      <div className="terms">
        <div>
          1. I/We hereby authorized <b>{ COMPANY_NAME }</b> to accept rental earnest deposit of <b>RM <input type="number" name="bookingFeeInRM" defaultValue={formData.bookingFeeIn?.RM} key={useId()} /> (Ringgit Malaysia <input type="text" name="bookingFeeInWord" defaultValue={formData.bookingFeeIn?.word} key={useId()} /></b> only) on my/our behalf from any intended tenants.
        </div>
        <div>
          2. I/We hereby agree to pay <b>{ COMPANY_NAME }</b> a commission equivalent to <input type="number" name="commissionFeeMonth" defaultValue={formData.commissionFee?.month} key={useId()} /> month of the rental <b>RM <input type="number" name="commissionFeeTotal" defaultValue={formData.commissionFee?.total} key={useId()} /></b> plus <b>Sales And Services Tax ({ SST_PERCENTAGE }% SST)</b> on the agency fees. Such commission shall be payable upon the signing of the Tenancy Agreement.
        </div>
        <div>
          3. I/We hereby agree to pay the said commission for any tenant introduced by you even if the tenant concludes the lease with me/us after the expiry date of this appointment.
        </div>
        <div>
          4. In the event that the transaction is aborted by either the tenant or the landlord before the Tenancy Agreement is signed bbut an earnest deposit has been paid, I/We agree to pay you (50%) of the Full agreed commission or (50%) of the forfeitable earnest deposit, <b><u>whichever is lesser</u></b>.
        </div>
        <div>
          5. In the event either the tenant or the landlord aborts the transaction after the Tenancy Agreement is signed, I/We agree to pay you the full commission as agreed above.
        </div>
        <div>
          6. I/We hereby authorize <b>{ COMPANY_NAME }</b> to act as stakeholder and to accept on my.our behalf the Earnest Deposit and to deduct form the earnest deposit the full agency fee upon signing of the Tenancy Agreement.
          </div>
        <div>
          7. This appointment shall be valid for a period from <input type="date" name="appointmentValidityFrom" defaultValue={formData.appointmentValidity?.from && convertToDateTimeLocalString(new Date(formData.appointmentValidity?.from))} key={useId()} /> to <input type="date" name="appointmentValidityTo" defaultValue={formData.appointmentValidity?.to && convertToDateTimeLocalString(new Date(formData.appointmentValidity?.to))} key={useId()} />
        </div>
      </div>

      <div className="signature">
        <div>
          <div>1. (owner Signature/Company Chop)</div>
          <div>Name: <input type="text" name="signatureOwner1Name" defaultValue={formData.signature?.owner1?.name} key={useId()} /></div>
          <div>NRIC: <input type="text" name="signatureOwner1NRICNo" defaultValue={formData.signature?.owner1?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signatureOwner1TelNo" defaultValue={formData.signature?.owner1?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signatureOwner1Date" defaultValue={formData.signature?.owner1?.date && convertToDateTimeLocalString(new Date(formData.signature?.owner1?.date))} key={useId()} /></div>
        </div>
        <div>
          <div>2. (owner Signature/Company Chop)</div>
          <div>Name: <input type="text" name="signatureOwner2Name" defaultValue={formData.signature?.owner2?.name} key={useId()} /></div>
          <div>NRIC: <input type="text" name="signatureOwner2NRICNo" defaultValue={formData.signature?.owner2?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signatureOwner2TelNo" defaultValue={formData.signature?.owner2?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signatureOwner2Date" defaultValue={formData.signature?.owner2?.date && convertToDateTimeLocalString(new Date(formData.signature?.owner2?.date))} key={useId()} /></div>
        </div>
        <div>
          <div>Signature of Witness</div>
          <div>Name: <input type="text" name="signatureWitnessName" defaultValue={formData.signature?.witness?.name} key={useId()} /></div>
          <div>NRIC: <input type="text" name="signatureWitnessNRICNo" defaultValue={formData.signature?.witness?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signatureWitnessTelNo" defaultValue={formData.signature?.witness?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signatureWitnessDate" defaultValue={formData.signature?.witness?.date && convertToDateTimeLocalString(new Date(formData.signature?.witness?.date))} key={useId()} /></div>
        </div>
      </div>

    </div>
  )
}

export default OATR;
