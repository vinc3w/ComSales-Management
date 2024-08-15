import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../../config.json";

function CaseNoInput({ user, setMessage, setPendingCases, pendingCases, refetch }) {

  const { formType, caseNo } = useParams();
  const navigate = useNavigate();

  const fetchPendingCases = async () => {
    try {
    
      // console.log(`${SERVER_URL}/case?status=pending${user.isAdmin ? '&agentId=' + user._id : ''}`)
      const { data } = await axios.get(`${SERVER_URL}/case?status=pending${!user.isAdmin ? '&agentId=' + user._id : ''}`);
      setPendingCases(data.saleCases);
      
    } catch (error) {
      
      setMessage({
        type: 'error',
        message: error.response?.data.message || error.message
      });

    }

  }

  useEffect(() => fetchPendingCases, [formType, caseNo, refetch])

  const toggleMenu = e => {
    fetchPendingCases();
    e.stopPropagation();
    const optionList = e.currentTarget.nextSibling;
    optionList.classList.toggle('show');

    setTimeout(() => {
      const hide = () => {
        optionList.classList.remove('show');
        document.removeEventListener('click', hide);
      }
      document.addEventListener('click', hide);
    });
  }

  return (
    <div className="case-no-input">

      <div>Case:</div>
      <div className="case-no-input-dropdown">
        <input type="hidden" name="caseId" value={caseNo ?? ''} />
        <div className="label" onClick={toggleMenu}>
          <div className="selection">
            { (caseNo === 'new') ? "Create New Case" : (caseNo ?? 'None') }
          </div>
        </div>

        <div className="option-list">
          <button type="button" onClick={() => navigate(`/case/create/new`)}>Create New Case</button>
          {
            pendingCases?.map((c, i) => (
              <button
                type="button"
                key={i}
                onClick={() => {
                  navigate(`/case/create/${c._id}${formType ? '/' + formType : ''}`);
                }}>
                { c.name || c._id }
              </button>
            ))
          }
        </div>
      </div>
      
    </div>
  );
}

export default CaseNoInput;
