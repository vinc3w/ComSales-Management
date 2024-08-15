import { useId } from "react";
import { COMPANY_NAME, COMPANY_ABBR, SST_PERCENTAGE } from "../../../../config.json";
import convertToDateTimeLocalString from "../../../../utils/convertToDateTimeLocalString";

function OTR({ formData, caseNo }) {

  return (
    <div className="otr">

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

      <div className="title"><b><u>OFFER TO RENT</u></b></div>

      <div className="p1">
        I/We <input type="text" name="tenantName" defaultValue={formData.tenantName} key={useId()} /> (the Purchaser and/or nominee) do hereby Offer to Rent the property known as <input type="text" name="propertyAddress" defaultValue={formData.propertyAddress} key={useId()} /> on an "as is where is" basis for the total rental amount of <b>RINGGIT MALAYSIA <input type="text" name="totalPriceInWord" defaultValue={formData.totalPriceIn?.word} key={useId()} /> (RM) <input type="number" name="totalPriceInRM" defaultValue={formData.totalPriceIn?.RM} key={useId()} /></b> (including SST { SST_PERCENTAGE }%) by the paying an earnest deposit sum of <b>RINGGIT MALAYSIA: <input type="text" name="depositSumInWord" defaultValue={formData.depositSumIn?.word} key={useId()} /> (RM <input type="number" name="depositSumInRM" defaultValue={formData.depositSumIn?.RM} key={useId()} />)</b> via online Tranfer/Cash/Cheque/Bank Draft No <input type="text" name="paymentNo" defaultValue={formData.payment?.no} key={useId()} /> Bank: <input type="text" name="paymentBank" defaultValue={formData.payment?.bank} key={useId()} /> dated <input type="date" name="paymentDated" defaultValue={formData.payment?.dated && convertToDateTimeLocalString(new Date(formData.payment?.dated))} key={useId()} /> payable to <b>{ COMPANY_NAME } (CLIENTS ACC3) MBB: 5647 8016 7488</b> with the terms and conditions of rental as follows:-
      </div>

      <div className="terms">
        <div className="spread-out">
          <div>
            1. Advance Rental for one(1) month
              (inclusive/exclusive of service charge)
          </div>
          <div>
            RM <input type="number" name="advanceRentalFor1MonthPrice" defaultValue={formData.termsAndConditions?.advanceRentalFor1MonthPrice} key={useId()} />
          </div>
        </div>
        <div className="spread-out">
          <div>
            2. Securty Deposit for <input type="number" name="securityDepositForMonths" defaultValue={formData.termsAndConditions?.securityDeposit?.forMonths} key={useId()} /> months rental
          </div>
          <div>
            RM <input type="tenumberxt" name="securityDepositPrice" defaultValue={formData.termsAndConditions?.securityDeposit?.price} key={useId()} />
          </div>
        </div>
        <div className="spread-out">
          <div>
            3. Utilities Deposit (Electricity, Water & Sewerage)
          </div>
          <div>
            RM <input type="number" name="utilitiesDepositPrice" defaultValue={formData.termsAndConditions?.utilitiesDepositPrice} key={useId()} />
          </div>
        </div>
        <div className="spread-out">
          <div>
            4. Access Card <input type="number" name="accessCardPcs" defaultValue={formData.termsAndConditions?.accessCard?.pcs} key={useId()} />(pcs)/Car Deposit <input type="number" name="accessCardCarDepositPcs" defaultValue={formData.termsAndConditions?.accessCard?.carDepositPcs} key={useId()} />(pcs)
          </div>
          <div>
            RM <input type="number" name="accessCardPrice" defaultValue={formData.termsAndConditions?.accessCard?.price} key={useId()} />
          </div>
        </div>
        <div className="spread-out">
          <div>
            5. Stamping fee and disbursement of tenancy Agreement
          </div>
          <div>
            RM <input type="number" name="stampingFeeAndDisbursermentOfTenancyAgreementPrice" defaultValue={formData.termsAndConditions?.stampingFeeAndDisbursermentOfTenancyAgreementPrice} key={useId()} />
          </div>
        </div>
        <div className="spread-out">
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;Total to be paid before release of keys
          </div>
          <div>
            RM <input type="number" name="totalToBePaidBeforeReleaseOfKeysPrice" defaultValue={formData.termsAndConditions?.totalToBePaidBeforeReleaseOfKeysPrice} key={useId()} />
          </div>
        </div>
        <div className="spread-out">
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;Less: Earnest Deposit
          </div>
          <div>
            RM <input type="number" name="lessEarnestDepositPrice" defaultValue={formData.termsAndConditions?.lessEarnestDepositPrice} key={useId()} />
          </div>
        </div>
        <div className="spread-out">
          <div></div>
          <div>
            Balance&nbsp;&nbsp;&nbsp;&nbsp;RM <input type="number" name="balancePrice" defaultValue={formData.termsAndConditions?.balancePrice} key={useId()} />
          </div>
        </div>
        <div>
          6. Tenancy Commencement Date: <input type="date" name="tenancyCommencementDate" defaultValue={formData.termsAndConditions?.tenancyCommencementDate && convertToDateTimeLocalString(new Date(formData.termsAndConditions?.tenancyCommencementDate))} key={useId()} />
        </div>
        <div>
          7. Period of Tenancy <input type="text" name="periodTenancyInWord" defaultValue={formData.termsAndConditions?.periodOfTenancyIn?.word} key={useId()} />(<input type="number" name="periodTenancyInYear" defaultValue={formData.termsAndConditions?.periodOfTenancyIn.year} key={useId()} />) Years with an option to renew for another <input type="text" name="optionToRenewTenancyForAnotherInWord" defaultValue={formData.termsAndConditions?.optionToRenewTenancyForAnotherIn?.word} key={useId()} />(<input type="number" name="optionToRenewTenancyForAnotherInYear" defaultValue={formData.termsAndConditions?.optionToRenewTenancyForAnotherIn?.year} key={useId()} />) Years at the prevailling merket rate.
        </div>
        <div>
          8. The premis is let out fully furnished / partly funished / unfurnished. (attached a full list of furnitures, fixtures and appliances)
        </div>
        <div>
          9. The Tenancy Agreement must be signed by both parties within Seven (7) full working days from the date of acceptance by the Lanlord.
          In default of SIgning the <b>Tenancy Agreement</b> within the above validity date:
          a) <b>by the Tenant</b>, the said earnest deposit sum paid herwith shall be forefeited by the Landlord and 50% of the forfeited sum shall be paid to <b>{ COMPANY_NAME }. ("{ COMPANY_ABBR }")</b>
          b) <b>by the Landlord</b>, the Landlord shall refund the said earnest deposit sum received from the Tenant together with a compensatio nsum of equivalent amount which shall be shared equally between the Tenant and <b>{ COMPANY_ABBR }</b>
        </div>
        <div>
          19. All expenses including Stamp Duty and preeparation of the Tenancy Agreement shall be borne by the Tenant/Landlord/Both Parties.
        </div>
        <div>
          11. The landlordagree to pay <b>{ COMPANY_ABBR } (1.25/1.75)</b> months rental plus Six percent Sales & Service Tax { SST_PERCENTAGE }6% SST) as Agency Fee payable to and due upon signing the Tenancy Agreement or occupation of premises whichever is earlier.
        </div>
        <div>
          12. <b>{ COMPANY_ABBR }</b> shall no be liable for any cash payment. Tenant may pay by cheque or online transfere to our Client's Account.
        </div>
        <div>
          13. This offer to pruchase shall constitute a binding constract which shall be superseded only upon the execution of thee formal Sale and Purchase Agreement (SPA).
          Additional clause (if any):- <textarea name="additionalClause" defaultValue={formData.termsAndConditions?.additionalClause}></textarea>
        </div>
      </div>

      <div className="signature">
        <div>
          <div>1. (Signed by the said <b>Landlord (s)</b>)</div>
          <div>Name: <input type="text" name="signaturePurchaser1Name" defaultValue={formData.signature?.purchaser?.['1']?.name} key={useId()} /></div>
          <div>NRIC No: <input type="text" name="signaturePurchaser1NRICNo" defaultValue={formData.signature?.purchaser?.['1']?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signaturePurchaser1TelNo" defaultValue={formData.signature?.purchaser?.['1']?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signaturePurchaser1Date" defaultValue={formData.signature?.purchaser?.['1']?.date && convertToDateTimeLocalString(new Date(formData.signature?.purchaser?.['1']?.date))} key={useId()} /></div>
        </div>
        <div>
          <div>2. (Signed by the said <b>Landlord (s)</b>)</div>
          <div>Name: <input type="text" name="signaturePurchaser2Name" defaultValue={formData.signature?.purchaser?.['2']?.name} key={useId()} /></div>
          <div>NRIC No: <input type="text" name="signaturePurchaser2NRICNo" defaultValue={formData.signature?.purchaser?.['2']?.NRICNo} key={useId()} /></div>
          <div>Tel No: <input type="text" name="signaturePurchaser2TelNo" defaultValue={formData.signature?.purchaser?.['2']?.telNo} key={useId()} /></div>
          <div>Date: <input type="date" name="signaturePurchaser2Date" defaultValue={formData.signature?.purchaser?.['2']?.date && convertToDateTimeLocalString(new Date())} key={useId(formData.signature?.purchaser?.['2']?.date)} /></div>
        </div>
        <div>
          <div><b>Witnessed</b> by:</div>
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

export default OTR;
