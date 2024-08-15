import { useId } from "react";
import { COMPANY_NAME, COMPANY_ADDRESS } from "../../../../config.json";
import convertToDateTimeLocalString from "../../../../utils/convertToDateTimeLocalString";

function OATS({ formData, caseNo }) {

  return (
    <div className="oats">

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

      <div className="title"><b><u>RE: AUTHORIZATION LETTER FROM OWNER (Sale)</u></b></div>

      <div className="address-input"><b>PROPERTY ADDRESS: <textarea name="propertyAddress" defaultValue={formData.propertyAddress} key={useId()}></textarea></b> (hereinafter called the "<b>SAID PROPERTY</b>")</div>

      <div className="p1">I/We the undersigned being the Registered Owner(s) of the above state property do hereby appoint you as our Real Estate Agent on an <b>solve and exclusive agency</b> basis to act on my our behalf to rent the said property. I/We also authorize you to display signboards, to advertise in any media, or in any form to promote the rent of the said property subject to the following terms:-</div>

      <div className="terms">
        <div>
          1. The total consideration for the said property shall be at <b>RM <input type="number" name="propertyPriceInRM" defaultValue={formData.propertyPriceIn?.RM} key={useId()} /> (Ringgit Malaysia <input type="text" name="propertyPriceInWord" defaultValue={formData.propertyPriceIn?.word} key={useId()} /></b> only) or such other sum agreed by me/us.
        </div>
        <div>
          2. I/We hereby agree to pay <b>{ COMPANY_NAME }</b> a fee in accordance with <b>Schedule 7(c)(1) under Rule 48(a) of the VALUES, APPRAISERS AND ESTATE AGENTS RULES 1986</b> as follows:-
          <div>(a) Land and Buildings - Fee of 3%</div>
          <div>(b) Fees for other services such as joint venture, saleof copany, property swaps, etc - <b>Fee of 3%</b></div>
          <div>(c) Chattels including Plant and Machinery - <b>10% of the sales proceed</b></div>
        </div>
        <div>
          3. The land and building fee is <input type="number" step="any" name="landAndBuildingFee" defaultValue={formData.landAndBuildingFee} key={useId()} /> <b>%</b>. The full fee payable is calculated at <b>RM <input type="number" name="commissionFeeTotal" defaultValue={formData.commissionFee?.total} key={useId()} /></b> being your Agency Fee for a total of <b>RM <input type="number" name="commissionFeeTotalWithTax" defaultValue={formData.commissionFee?.totalWithTax} key={useId()} /></b>. The Professional Fee is payable in full upon the signing of the Sales & Purchase Agreement.
        </div>
        <div>
          4. In the event that I/We have sold the property myself or by a third party. I/We agree to pay <b>{ COMPANY_NAME }</b> the full fees as agreed.
        </div>
        <div>
          5. In the event the transaction is aborted before signing the Sale & Purchase Agreement but earnest money or forfeitable deposit is paid, I/We agree to pay you a fee equivalent to Fifty per cent <b>(50%)</b> of the earnest money or forfeitable deposit.
        </div>
        <div>
          6. In the event that consent from the state authority or letter of confirmation is not obtained for any reason whatsoever after the Sales & Purchase Agreement is signed by the Purchaser and me/us, I/we agree to pay you a sum equivalent to fifty percent (50%) of the earnest money or forfeitable deposit as remuneration include transportation, telephone and advertisement charges and other expenses include.
          </div>
        <div>
          7. In the event that after signing the Offer To Purchase, I/We reject this offer for whatever reasons, I/We undertake to refund the Earnest Deposit and in addition I/We shall pay an equivalent sum of the Earnest Deposit to the purchaser as compensation. However, the Purchaser reserves the right to pursue an action for specific performance. 
        </div>
        <div>
          8. I/We hereby authorize <b>{ COMPANY_NAME }</b> to act as stakeholder and to accept on my/our behalf the Earnest Deposit and to deduct from the earnest deposit the full agency fee upon signing of the Sale & Purchase Agreement.
        </div>
        <div>
          9. This appointment shall be valid for a period from <input type="date" name="appointmentValidityFrom" defaultValue={formData.appointmentValidity?.from && convertToDateTimeLocalString(new Date(formData.appointmentValidity?.from))} key={useId()} /> to <input type="date" name="appointmentValidityTo" defaultValue={formData.appointmentValidity?.to && convertToDateTimeLocalString(new Date(formData.appointmentValidity?.to))} key={useId()} />
        </div>
      </div>

      <div className="signature">
        <div>
          <div>1. (owner Signature/Company Chop)</div>
          <div>Name: <input type="text" name="signatureOwner1Name" defaultValue={formData.signature?.owner1?.name} key={useId()} /></div>
          <div>NRIC: <input type="text" name="signatureOwner1NRICNo" defaultValue={formData.signature?.owner1?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signatureOwner1TelNo" defaultValue={formData.signature?.owner1?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signatureOwner1Date" defaultValue={formData.signature?.owner1?.date && convertToDateTimeLocalString(new Date(formData.signature?.owner1.date))} key={useId()} /></div>
        </div>
        <div>
          <div>2. (owner Signature/Company Chop)</div>
          <div>Name: <input type="text" name="signatureOwner2Name" defaultValue={formData.signature?.owner2?.name} key={useId()} /></div>
          <div>NRIC: <input type="text" name="signatureOwner2NRICNo" defaultValue={formData.signature?.owner2?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signatureOwner2TelNo" defaultValue={formData.signature?.owner2?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signatureOwner2Date" defaultValue={formData.signature?.owner2?.date && convertToDateTimeLocalString(new Date(formData.signature?.owner2.date))} key={useId()} /></div>
        </div>
        <div>
          <div>Signature of Witness</div>
          <div>Name: <input type="text" name="signatureWitnessName" defaultValue={formData.signature?.witness?.name} key={useId()} /></div>
          <div>NRIC: <input type="text" name="signatureWitnessNRICNo" defaultValue={formData.signature?.witness?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signatureWitnessTelNo" defaultValue={formData.signature?.witness?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signatureWitnessDate" defaultValue={formData.signature?.witness?.date && convertToDateTimeLocalString(new Date(formData.signature?.witness.date))} key={useId()} /></div>
        </div>
      </div>

    </div>
  )
}

export default OATS;
