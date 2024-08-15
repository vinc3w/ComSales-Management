import LoadingCircle from "../../../../Components/LoadingCircle";
import Info from "./Info";
import Payment from "./Payment";

function Summary({ saleCase }) {

  return Object.entries(saleCase || {}).length ? (
    <div className="summary">

      <Info saleCase={saleCase} />
      <Payment saleCase={saleCase} />

    </div>
  ) :
  <LoadingCircle />;
}

export default Summary;
