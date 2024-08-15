import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../config.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus, faSuitcase } from "@fortawesome/free-solid-svg-icons";

function Cases({ user, saleCases }) {

  const [cases, setCases] = useState(saleCases || []);
  const [show, setShow] = useState(localStorage.showSidebarCases === 'true');

  const fetchCases = async () => {
    try {

      const { data } = await axios.get(`${SERVER_URL}/case?agentId=${user._id}&status=pending`);
      setCases(data.saleCases ?? []);
      
    } catch (error) {

      
    }
  }
  
  useEffect(() => {
    
    if (!saleCases?.length) fetchCases()
  
  }, [])

  useEffect(() => {

    if (saleCases?.length) setCases(saleCases.filter(i => i.agent._id === user._id));

  }, [saleCases])

  const toggle = () => {
    localStorage.showSidebarCases = !show;
    setShow(!show)
  }

  return (
    <section className="cases">

      <div className="title">Your Cases</div>
      <div className="heading" onClick={toggle}>
        <div className="left">
          <FontAwesomeIcon icon={faSuitcase} />
          Pending
        </div>
        { show ? <FontAwesomeIcon icon={faAdd} /> : <FontAwesomeIcon icon={faMinus} /> }
      </div>
      {
        show &&
        <>
        <ul>
          {
            cases.map((c, i) => (
              <li key={i}>
                <Link to={`/case/create/${c._id}`}>{ c.name || c._id }</Link>
              </li>
            ))
          }
          <li>
            <Link to="/case/create/new" className="create-new" onClick={fetchCases}>
              <FontAwesomeIcon icon={faAdd} />
              <div>New Case</div>
            </Link>
          </li>
        </ul>
        </>
      }

    </section>
  );
}

export default Cases;
