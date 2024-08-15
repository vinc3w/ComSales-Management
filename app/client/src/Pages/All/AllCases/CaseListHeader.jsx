import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL, SST_PERCENTAGE } from "../../../config.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from "react-router-dom";

function CaseListHeader({ isAdmin, user, setCases, setIsLoading, setErrorMessage }) {

  const [searchParams, setSearchParams] = useSearchParams();
  const [sortItem, setSortItem] = useState(searchParams.get('sort'));
  const [order, setOrder] = useState(searchParams.get('order') !== 'ACS' || 'ACS');

  const sort = async (item) => {
    if (item === sortItem) setOrder(order === 'ASC' ? 'DESC' : 'ASC');
    setSortItem(item);
  }

  const fetchSort = async () => {
    try {

      setIsLoading(true);
      setSearchParams(params => {
        params.set('sort', sortItem);
        params.set('order', order);
        return params
      })
      const { data } = await axios.get(`${SERVER_URL}/case?${isAdmin ? '' : 'agentId=' + user._id}&sort=${sortItem}&order=${order}`);
      setCases(data.saleCases ?? []);
      setIsLoading(false);
      
    } catch (error) {
      
      setIsLoading(false);
      setErrorMessage(error.response?.data.message || error.message);
      
    }
  }

  useEffect(() => {

    if (sortItem) fetchSort();

  }, [sortItem, order])

  return (
    <thead>
      <tr className="heading">
        <td><button onClick={() => sort('_id')}>
            Case Name
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
        <td><button onClick={() => sort('agentName')}>
            Agent name
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
        <td><button onClick={() => sort('ownerName')}>
            Owner
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
        <td><button onClick={() => sort('buyerName')}>
            Buyer
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
        <td><button onClick={() => sort('property.type')}>
            Property Type
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
        <td><button onClick={() => sort('property.address')}>
            Property Address
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
        <td><button onClick={() => sort('status')}>
            Status
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
        <td><button onClick={() => sort('dateOpened')}>
            Date Opened
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
        <td><button onClick={() => sort('dateClosed')}>
            Date Closed
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
        <td><button onClick={() => sort('commission.amount')}>
            Commission Amount (RM)
            <FontAwesomeIcon icon={faSort} />
          </button>
        </td>
      </tr>
    </thead>
  );
}

export default CaseListHeader;
