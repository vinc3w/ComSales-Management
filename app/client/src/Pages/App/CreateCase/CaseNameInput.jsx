import { useId, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../config.json";
import LoadingCircle from "../../../Components/LoadingCircle";

function CaseNameInput({ user, saleCase, setMessage, setRefetch }) {
  
  const [isLoading, setIsLoading] = useState(false);

  const renameCase = async e => {
    try {
    
      e.preventDefault();
      if (!saleCase || isLoading) return;
      setIsLoading(true);
      const formData = Object.fromEntries(new FormData(e.target));
      await axios.put(`${SERVER_URL}/case`, {
        userId: user._id,
        caseId: saleCase._id,
        updates: formData
      });
      setRefetch(r => !r);
      setIsLoading(false); 
      setMessage({
        type: 'success',
        message: `Renamed case to ${formData.name}`
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
    <form className="case-name-input" onSubmit={renameCase}>

      <div className="label">Name:</div>
      <input type="text" name="name" placeholder="Case Name" defaultValue={saleCase?.name} key={useId()} />
      {
        isLoading ?
        <button className="button-primary disabled"><LoadingCircle /></button> :
        <button className="button-primary">Rename</button>
      }

    </form>
  );
}

export default CaseNameInput;
