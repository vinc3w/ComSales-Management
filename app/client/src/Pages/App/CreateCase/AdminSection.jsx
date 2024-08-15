import axios from "axios";
import { SERVER_URL } from "../../../config.json";
import { useState } from "react";
import LoadingCircle from "../../../Components/LoadingCircle";
import moment from "moment";

function AdminSection({ user, saleCase, setMessage, setRefetch }) {

  const [isLoading, setIsLoading] = useState(false);
  const [statusSet, setStatusSet] = useState('');
  
  const mark = async status => {
    try {

      if (isLoading) return
      setStatusSet(status);
      setIsLoading(true);
      const formData = {
        userId: user._id,
        updates: { status },
        caseId: saleCase._id
      };
      if (status === 'completed') formData.updates.dateClosed = moment().format('L')
      await axios.put(`${SERVER_URL}/case`, formData);
      setRefetch(r => !r);
      setIsLoading(false);
      setMessage({
        type: 'success',
        message: `Case marked as ${status}`
      });
      
    } catch (error) {

      setIsLoading(false);
      setMessage({
        type: 'error',
        message: error.response?.data.message || error.message
      });
      
    }
  }

  return (
    <div className="admin-section">

      <div>Mark as:</div>
      {
        isLoading ?
        <>
          <button type="button" className="button-error disabled">{ statusSet === 'pending' ? <LoadingCircle /> : 'Pending' }</button>
          <button type="button" className="button-warning disabled">{ statusSet === 'approved' ? <LoadingCircle /> : 'Approved' }</button>
          <button type="button" className="button-success disabled">{ statusSet === 'completed' ? <LoadingCircle /> : 'Completed' }</button>
        </> :
        <>
          <button type="button" className="button-error" onClick={() => mark('pending')}>Pending</button>
          <button type="button" className="button-warning" onClick={() => mark('approved')}>Approved</button>
          <button type="button" className="button-success" onClick={() => mark('completed')}>Completed</button>
        </>
      }

    </div>
  );
}

export default AdminSection;
