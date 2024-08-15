import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../../config.json";
import { useState } from "react";
import LoadingCircle from "../../../Components/LoadingCircle";

function DeleteCase({ user, setMessage, setRefetch }) {

  const { caseNo } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const deleteSaleCase = async e => {
    try { 

      e.preventDefault();
      if (!caseNo || isLoading) return;
      setIsLoading(true);
      await axios.delete(`${SERVER_URL}/case?userId=${user._id}&caseId=${caseNo}`);
      setRefetch(r => !r);
      setIsLoading(false);
      setMessage({
        type: 'success',
        message: 'Case deleted'
      });
      navigate('/case/create', { replace: true });
      
    } catch (error) {

      setIsLoading(false);
      setMessage({
        type: 'error',
        message: error.response?.data.message || error.message
      });
      
    }
  }

  return user.isAdmin && (caseNo && caseNo !== 'new') && (
    <form className="delete-case" onSubmit={deleteSaleCase}>
      {
        isLoading ?
        <button className="button-error delete-case disabled"><LoadingCircle /></button>:
        <button className="button-error delete-case">Delete Case</button>
      }
    </form>
  )
}

export default DeleteCase;
