import { useId } from "react";
import { COMPANY_NAME, SST_PERCENTAGE } from "../../../../config.json";
import convertToDateTimeLocalString from "../../../../utils/convertToDateTimeLocalString";

function OTP({ formData, caseNo }) {

  return (
    <div className="otp">

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

      <div className="title"><b><u>OFFER TO PURCHASE</u></b></div>

      <div className="p1">
        I/We <input type="text" name="purchaserName" defaultValue={formData.purchaserName} key={useId()} /> (the Purchaser and/or nominee) do hereby Offer to Purchase the property known as <textarea name="propertyAddress" defaultValue={formData.propertyAddress} key={useId()}></textarea> on an "as is where is" basis for the total purchase price of <b>RINGGIT MALAYSIA: <input type="text" name="totalPriceInWord" defaultValue={formData.totalPriceIn?.word} key={useId()} /> (RM) <input type="number" name="totalPriceInRM" defaultValue={formData.totalPriceIn?.RM} key={useId()} /></b> (including SST { SST_PERCENTAGE }%) by the paying an earnest deposit sum of <b>RINGGIT MALAYSIA: <input type="text" name="depositSumInWord" defaultValue={formData.depositSumIn?.word} key={useId()} /> (RM <input type="number" name="depositSumInRM" defaultValue={formData.depositSumIn?.RM} key={useId()} />)</b> via online Tranfer/Cash/Cheque/Bank Draft No <input type="text" name="paymentNo" defaultValue={formData.payment?.no} key={useId()} /> dated <input type="date" name="paymentDated" defaultValue={formData.payment?.dated && convertToDateTimeLocalString(new Date(formData.payment?.dated))} key={useId()} /> payable to <b>{ COMPANY_NAME } (CLIENTS ACC3) MBB: 5647 8016 7488</b> as stakeholder with the terms and conditions of purchase as follows:-
      </div>

      <div className="terms">
        <div>
          1. <b>Ten percent (10%)</b> of the Total Purchase Price inclusive of the earnest deposit sum collected shall be paid immediately upon signing of the <b>Sales & Purchase Agreement</b> (SPA) by the Purchaser.
        </div>
        <div>
          2. The balance of <b>Ninety Percent (90%)</b> shall be paid within Ninety (90) days from the date of signing the <b>Sale & Purchase Agreement/Receipt of Consent</b> from the developer <b>AND/OR Relevant Authorities (whichever is the later)</b> with an extend for a further period of Thirty (30) days carrying an interest of Eight Percent (8%) per annum calculate on a daily rest basis on the balance unpaid sum.
        </div>
        <div>
          3. The <b>Sales & Purchase Agreement (SPA)</b> must be signed by both parties within Fifteen (15) full working days from the date of acceptance by the Vendor, complete with all relevant documents (sale & Purchase Agreement Copy and / or Title Copy & Vendor NRIC Copy).
          In default of Signing the Sale & Purchase Agreement (SPA) within the above stipulated date:<br />
          a) by the Purchaser, the said earnest deposit sum paid herewith shall be forfeited by the Vendor.<br />
          b) by the Vendor, the Vendor shall refund the said earnest deposit sum received from the Purchased together with a compensation sum of equivalent amount which shall be apportioned equally between the Purchaser and <b>{ COMPANY_NAME }</b>. However the purchaser reserved the rights to sue for specific performance.
        </div>
        <div>
          4. The purchaser shall bear the Stamp Duty Registration Fees and hisLegal Fes incurred in the SPA in this transaction. The Vendor shall bear his own solicitor's fees, the dischargeds of Charge and cost of obtaining the necessary consent from the Relevant Authorities, if any.
        </div>
        <div>
          5. Handing over prossession with / without tenancy will only be delivered upon full payment of the <b>Total Purchase Price.</b>
        </div>
        <div>
          6. The offer to purchase is subject to the acceptance by the Vendo and if or when it is not accepted, the earnest deposit sum paid herewith shall be refunded in full to the Purchaser without any interest and without any legal resource.
        </div>
        <div>
          7. The <b>Vendor(s)</b> hereby agrees / authorize(s) <b>{ COMPANY_NAME }</b> to refund the earnest deposit to thee Purchaser in the following circumstances:-<br />
          (i) in the event the Vendor is a bankrupt or subject to any bankruptcy proceeding much may affect the rights of Vendor to dispose the Property; or<br />
          (ii) in the event theere is any other private caveat lodged by third party other than vendor's Financier; or<br />
          (iii) the loan application in the precentage of <input type="text" name="loanApplicationPercentage" defaultValue={formData.termsAndConditions?.loanApplicationPercentage} key={useId()} /> to financee purchase the property has been rejected subject to Purchaser providing at least 2 (two) reject letter(s) from the Financier Institution and / or letter offer given by Financier Institution.
        </div>
        <div>
          8. <b>{ COMPANY_NAME }</b> shall not be liablee for any cash payment, You may pay by cheque or online transder to our Client's Account.
        </div>
        <div>
          9. This offer to pruchase shall constitute a binding constract which shall be superseded only upon the execution of thee formal Sale and Purchase Agreement (SPA).
          Additional clause (if any):- <textarea name="additionalClause" defaultValue={formData.termsAndConditions?.additionalClause} key={useId()}></textarea>
        </div>
      </div>

      <div className="signature">
        <div>
          <div>1. (Signed by the said <b>Purchaser</b>)</div>
          <div>Name: <input type="text" name="signaturePurchaser1Name" defaultValue={formData.signature?.purchaser?.['1']?.name} key={useId()} /></div>
          <div>NRIC No: <input type="text" name="signaturePurchaser1NRICNo" defaultValue={formData.signature?.purchaser?.['1']?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signaturePurchaser1TelNo" defaultValue={formData.signature?.purchaser?.['1']?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signaturePurchaser1Date" defaultValue={formData.signature?.purchaser?.['1']?.date && convertToDateTimeLocalString(new Date(formData.signature?.purchaser?.['1']?.date))} key={useId()} /></div>
        </div>
        <div>
          <div>2. (Signed by the said <b>Purchaser</b>)</div>
          <div>Name: <input type="text" name="signaturePurchaser2Name" defaultValue={formData.signature?.purchaser?.['2']?.name} key={useId()} /></div>
          <div>NRIC No: <input type="text" name="signaturePurchaser2NRICNo" defaultValue={formData.signature?.purchaser?.['2']?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signaturePurchaser2TelNo" defaultValue={formData.signature?.purchaser?.['2']?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signaturePurchaser2Date" defaultValue={formData.signature?.purchaser?.['2']?.date && convertToDateTimeLocalString(new Date())} key={useId(formData.signature?.purchaser?.['2']?.date)} /></div>
        </div>
        <div>
          <div><b>Withnessed</b> by:</div>
          <div>Name: <input type="text" name="signaturePurchaserWitnessName" defaultValue={formData.signature?.purchaser?.witness?.name} key={useId()} /></div> 
          <div>NRIC No: <input type="text" name="signaturePurchaserWitnessNRICNo" defaultValue={formData.signature?.purchaser?.witness?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signaturePurchaserWitnessTelNo" defaultValue={formData.signature?.purchaser?.witness?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signaturePurchaserWitnessDate" defaultValue={formData.signature?.purchaser?.witness?.date && convertToDateTimeLocalString(new Date(formData.signature?.purchaser?.witness?.date))} key={useId()} /></div>
        </div>
      </div>

      <div className="signature">
        <div>
          <div>1. (Signed by the said <b>Vendor</b>)</div>
          <div>Name: <input type="text" name="signatureVendor1Name" defaultValue={formData.signature?.vendor?.['1']?.name} key={useId()} /></div>
          <div>NRIC No: <input type="text" name="signatureVendor1NRICNo" defaultValue={formData.signature?.vendor?.['1']?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signatureVendor1TelNo" defaultValue={formData.signature?.vendor?.['1']?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signatureVendor1Date" defaultValue={formData.signature?.vendor?.['1']?.date && convertToDateTimeLocalString(new Date(formData.signature?.vendor?.['1']?.date))} key={useId()} /></div>
        </div>
        <div>
          <div>2. (Signed by the said <b>Vendor</b>)</div>
          <div>Name: <input type="text" name="signatureVendor2Name" defaultValue={formData.signature?.vendor?.['2']?.name} key={useId()} /></div>
          <div>NRIC No: <input type="text" name="signatureVendor2NRICNo" defaultValue={formData.signature?.vendor?.['2']?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signatureVendor2TelNo" defaultValue={formData.signature?.vendor?.['2']?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signatureVendor2Date" defaultValue={formData.signature?.vendor?.['2']?.date && convertToDateTimeLocalString(new Date(formData.signature?.vendor?.['2']?.date))} key={useId()} /></div>
        </div>
        <div>
          <div><b>Withnessed</b> by:</div>
          <div>Name: <input type="text" name="signatureVendorWitnessName" defaultValue={formData.signature?.vendor?.witness?.name} key={useId()} /></div> 
          <div>NRIC No: <input type="text" name="signatureVendorWitnessNRICNo" defaultValue={formData.signature?.vendor?.witness?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signatureVendorWitnessTelNo" defaultValue={formData.signature?.vendor?.witness?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signatureVendorWitnessDate" defaultValue={formData.signature?.vendor?.witness?.date && convertToDateTimeLocalString(new Date(formData.signature?.vendor?.witness?.date))} key={useId()} /></div>
        </div>
      </div>

    </div>
  )
}

export default OTP;

