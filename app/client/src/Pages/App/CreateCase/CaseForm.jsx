import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../../config.json";

import LoadingCircle from "../../../Components/LoadingCircle";
import OATS from "./Forms/OATS";
import OATR from "./Forms/OATR";
import OTP from "./Forms/OTP";
import OTR from "./Forms/OTR";
import VA from "./Forms/VA";

function CaseForm({ autoFormData, isAutoFormDataLoading, fsLoading, setMessage, formRef }) {

  const { formType, caseNo } = useParams();
  const navigate = useNavigate();
  const [pbLoading, setPbLoading] = useState(false);
  
  let form;
  switch (formType) {
    case 'oats': form = <OATS formData={autoFormData} caseNo={caseNo} />; break;
    case 'oatr': form = <OATR formData={autoFormData} caseNo={caseNo} />; break;
    case 'va': form = <VA formData={autoFormData} caseNo={caseNo} />; break;
    case 'otp': form = <OTP formData={autoFormData} caseNo={caseNo} />; break;
    case 'otr': form = <OTR formData={autoFormData} caseNo={caseNo} />; break;
  }

  const deleteForm = async e => {
    try {

      setPbLoading(true);
      if (pbLoading) return;
      await axios.delete(`${SERVER_URL}/case/form?formType=${formType}$caseId=${caseNo}`);
      setPbLoading(false);
      setMessage({
        type: 'success',
        message: 'Form deleted'
      });
      navigate(`/case/create/${caseNo}`, { replace: true });
      
    } catch (error) {

      setPbLoading(false);
      setMessage({
        type: 'error',
        message: error.response?.data.message || error.message
      });
      
    }
  }

  if (caseNo && caseNo !== 'new' && !formType) return;
  if ((!caseNo | caseNo === 'new') &&
      !formType) return <div className="empty">Choose either to create a new case or update an existing case</div>;
  if (isAutoFormDataLoading) return <LoadingCircle />;
  return (
    <>
    <div className="form">
      <div className="form-content" ref={formRef}>{ form }</div>
    </div>
    <div className="buttons">
      {
        fsLoading ?
        <button type="submit" className="button-primary disabled"><LoadingCircle /></button> :
        <button type="submit" className="button-primary">{ (caseNo === 'new') ? 'create' : 'update' }</button>
      }
      {
        (caseNo !== 'new') && (
          pbLoading ?
          <button type="button" className="button-error delete disabled"><LoadingCircle /></button> :
          <button type="button" className="button-error delete" onClick={deleteForm}>Delete</button>
        )
      }
    </div>
    </>
  );
}

export default CaseForm;
