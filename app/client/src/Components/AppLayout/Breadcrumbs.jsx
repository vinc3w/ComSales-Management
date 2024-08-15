import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Breadcrumbs() {

	const mappedPaths = () => {

		const paths = window.location.pathname.split("/");
		return paths.map((p, i) => (
			p === "" ?
			<div key={i}>
				<Link key={i} to="/"><FontAwesomeIcon icon={faHome} /></Link>
			</div> :
			<div className="child-path" key={i}>
				<div className="seperator">{ ">" }</div>
				<Link to={paths.slice(0, i + 1).join("/")}>{ p[0].toUpperCase() + p.slice(1) }</Link>
			</div>
		));

	}

	return <div className="breadcrumbs">{ mappedPaths() }</div>;
}

export default Breadcrumbs;
