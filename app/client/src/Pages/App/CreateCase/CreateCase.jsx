import { createRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";
import { SERVER_URL } from "../../../config.json";
import CreateCaseLink from "../../App/Components/CreateCaseLink";
import AppLayout from "../../../Components/AppLayout/AppLayout";

import CaseNoInput from "./CaseNoInput";
import CaseNameInput from "./CaseNameInput";
import CaseForm from "./CaseForm";
import AdminSection from "./AdminSection";
import DeleteCase from "./DeleteCase";
import Summary from "./Summary/Summary";
import PDFExport from "./PDFExport";

function CreateCase() {

  const formRef = createRef(null);
  const navigate = useNavigate();
  const [user] = useAuth();
  const { formType, caseNo } = useParams();
  const [message, setMessage] = useState({});
  const [saleCase, setSaleCase] = useState(null);
  const [isAutoFormDataLoading, setIsAutoFormDataLoading] = useState(false);
  const [fsLoading, setFsLoading] = useState(false);
  const [autoFormData, setAutoFormData] = useState({});
  const [pendingCases, setPendingCases] = useState([]);
  const [refetch, setRefetch] = useState(false);

  const onSubmit = async e => {
    try {

      e.preventDefault();
      if (!caseNo || fsLoading) return;

      setFsLoading(true);
      const formData = Object.fromEntries(new FormData(e.target));
      const { data } = await axios[caseNo === 'new' ? 'post' : 'put'](
        `${SERVER_URL}/case${caseNo !== 'new' ? '/form' : ''}`,
        {
          userId: user._id,
          username: user.username,
          formType,
          formData,
          caseId: caseNo
        }
      );
      setFsLoading(false);
      setMessage({
        type: 'success',
        message: caseNo === 'new' ? 'New case and form created' : 'Form updated'
      });
      if (caseNo === 'new') {
        setRefetch(r => !r);
        navigate(`/case/create/${data.saleCase._id}/${formType}`);
      }
      
    } catch (error) {

      setFsLoading(false);
      setMessage({
        type: 'error',
        message: error.response?.data.message || error.message
      });
      
    }
  }

  const fetchSaleCase = async () => {
    try {

      setIsAutoFormDataLoading(true);
      const { data } = await axios.get(`${SERVER_URL}/case?caseId=${caseNo}`);
      const saleCase = data.saleCases?.[0];
      if (!saleCase) return;
      if (!user.isAdmin && saleCase.agent._id !== user._id) navigate('/dashboard', { replace: true });
      setSaleCase(saleCase);
      switch (formType) {
        case 'oats': setAutoFormData(saleCase.ownerAuthorizationToSaleForm || {}); break;
        case 'oatr': setAutoFormData(saleCase.ownerAuthorizationToRentForm || {}); break;
        case 'va': setAutoFormData(saleCase.viewerAcknowledgementForm || {}); break;
        case 'otp': setAutoFormData(saleCase.offerToPurchaseForm || {}); break;
        case 'otr': setAutoFormData(saleCase.offerToRentForm || {}); break;
      }
      setIsAutoFormDataLoading(false);
      
    } catch (error) {

      console.log(error)
      setIsAutoFormDataLoading(false);
      setSaleCase(null);
      setMessage({
        type: 'error',
        message: error.response?.data.message || error.message
      });
      
    }
  }

  useEffect(() => {

    if (caseNo === 'new') {
      setSaleCase({});
      setAutoFormData({});
      return;
    }
    if (caseNo) fetchSaleCase();

  }, [formType, caseNo, refetch])

  return (
    <AppLayout user={user} topContent={<CreateCaseLink />} saleCases={pendingCases}>
    <div id="CreateCase">

      <div className={message.type + '-message'}>{ message.message }</div>

        {
          (caseNo && caseNo !== 'new') &&
          <div className="create-case-top-top">
            <CaseNameInput user={user} saleCase={saleCase} setMessage={setMessage} setRefetch={setRefetch} />
            { formType && !isAutoFormDataLoading && <PDFExport formRef={formRef} /> }
          </div>
        }

      <form onSubmit={onSubmit}>

        <div className="create-case-top">

          <CaseNoInput
            user={user}
            setMessage={setMessage}
            setPendingCases={setPendingCases}
            pendingCases={pendingCases}
            refetch={refetch} />

          {
            user.isAdmin && (caseNo && caseNo !== 'new') &&
            <AdminSection user={user} saleCase={saleCase} setMessage={setMessage} setRefetch={setRefetch} />
          }

        </div>

        {
          !formType && caseNo && caseNo !== 'new' && <Summary saleCase={saleCase} />
        }

        <CaseForm
          autoFormData={autoFormData}
          isAutoFormDataLoading={isAutoFormDataLoading}
          setMessage={setMessage}
          fsLoading={fsLoading}
          formRef={formRef} />

      </form>

      <DeleteCase user={user} setMessage={setMessage} setRefetch={setRefetch} />

    </div>
    </AppLayout>
  );
}

export default CreateCase;
