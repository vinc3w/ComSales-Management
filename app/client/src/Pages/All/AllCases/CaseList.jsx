import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SERVER_URL } from "../../../config.json";
import axios from "axios";

import MappedCase from "./MappedCase";
import LoadingCircle from "../../../Components/LoadingCircle";
import CaseListHeader from "./CaseListHeader";
import Pagination from "../../../Components/Pagination";

function CaseList({ isAdmin, user, setErrorMessage, count, setCount }) {

  const currentPage = window.location.pathname.slice(1);
  const { page=1 } = useParams();
  const [searchParams] = useSearchParams();
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCases = async () => {
    try {

      let url = `${SERVER_URL}/case?${isAdmin ? '' : 'agentId=' + user._id}&page=${page}`;
      for (const [k, v] of searchParams.entries()) if (v) url += `&${k}=${v}`;
      
      setIsLoading(true);
      const { data } = await axios.get(url);
      setCases(data.saleCases ?? []);
      setCount(data.count);
      setIsLoading(false);
      
    } catch (error) {

      setIsLoading(false);
      setErrorMessage(error.response?.data.message || error.message);
      
    }
  }

  useEffect(() => {
    
    fetchCases()
  
  }, [currentPage, searchParams, page])

  return (
    <>
    <div className="table-container">
      <table className="case-list">
        <CaseListHeader isAdmin={isAdmin} user={user} setCases={setCases} setIsLoading={setIsLoading} setErrorMessage={setErrorMessage} />
        { !isLoading && <tbody>{ cases.map((c, i) => <MappedCase c={c} key={i} />) }</tbody> }
      </table>
      {
        !isLoading && !cases.length &&
        <div className="empty">
          <img src="/images/empty.gif" alt="no cases found" />
          <div className="title">No Cases Found</div>
        </div>
      }
      {
        isLoading &&
        <div className="loading">
          <LoadingCircle />
        </div>
      }
    </div>
    {
      !isNaN(parseInt(page)) && count !== 0 &&
      <Pagination pageType="case/page" page={parseInt(page)} count={count} />
    }
    </>
  );
}

export default CaseList;
