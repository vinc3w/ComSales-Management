import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DropdownLink from "../../../Components/DropdownLink";

function CreateCaseLink() {

	const { formType, caseNo } = useParams();
  const navigate = useNavigate();

	useEffect(() => {

		if (!formType) return;

		navigate(`/case/create/${caseNo || 'new'}/${formType}`);

	}, [formType])

  return (
		<DropdownLink
			label="Form"
			selected={formType || 'None'}
			options={[
				{ label: 'Owner Authorization to Sale', url: `/case/create/${caseNo || 'new'}/oats` },
				{ label: 'Owner Authorization to Rent', url: `/case/create/${caseNo || 'new'}/oatr` },
				{ label: 'Viewer\'s Acknowledgement', url: `/case/create/${caseNo || 'new'}/va` },
				{ label: 'Offer to Purchase', url: `/case/create/${caseNo || 'new'}/otp` },
				{ label: 'Offer to Rent', url: `/case/create/${caseNo || 'new'}/otr` }
			]}
		/>
  );
}

export default CreateCaseLink;
