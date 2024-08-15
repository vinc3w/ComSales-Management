import { useId, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SERVER_URL } from "../../../config.json";
import LoadingCircle from "../../../Components/LoadingCircle";
import convertToDateTimeLocalString from "../../../utils/convertToDateTimeLocalString";

function Form({ user, employee, setMessage }) {

  const { userId } = useParams();
  const navigate = useNavigate();
  const [jobExperience, setJobExperience] = useState(
    employee.jobExperience?.length ? employee.jobExperience : [{}, {}, {}]
  );
  const [sex, setSex] = useState(employee.sex);
  const [type, setType] = useState(employee.type);
  const [profileImage, setProfileImage] = useState(employee.profileImage ? `${SERVER_URL}${employee.profileImage}` : null);
  const [pbLoading, setPBLoading] = useState(false);
  const [sbLoading, setSBLoading] = useState(false);
  
  const onSubmit = async e => { 
    try {

      e.preventDefault();
      if (pbLoading) return;
      setPBLoading(true);
      const formData = new FormData(e.target);
      formData.append('adminId', user._id);
      formData.append('userId', userId);
      formData.append('jobExperience', JSON.stringify(jobExperience));
      if (employee._id === user._id) formData.append('isAdmin', employee.isAdmin ? 'on' : '');
      const isCreateNew = userId && userId === 'new';
      const { data } = await (
        isCreateNew ?
          axios.post(`${SERVER_URL}/auth/register`, formData) :
          axios.put(`${SERVER_URL}/user`, formData)
      );
      setPBLoading(false);
      setMessage({
        type: 'success',
        message: isCreateNew ? 'User created' : 'User updated'
      });
      if ((!userId || userId === 'new')) navigate(`/admin/employee/${data.user._id}`, { replace: true });
      
    } catch (error) {

      setPBLoading(false);
      setMessage({
        type: 'error',
        message: error.response?.data.message || error.message
      });
      
    }
  }

	const handleFileChange = e => {

		const file = e.target.files[0];
    setProfileImage(window.URL.createObjectURL(file));

	}


  const editJobExperience = (index, key, value) => {
    const temp = jobExperience;
    temp[index][key] = value;
    setJobExperience(temp);
  }

  const deleteEmployee = async () => {
    try {

      setSBLoading(true);
      await axios.delete(`${SERVER_URL}/user?userId=${userId}`);
      setSBLoading(false);
      setMessage({
        type: 'success',
        message: 'User deleted'
      });
      navigate('/admin/employee/all', { replace: true });
      
    } catch (error) {

      setSBLoading(false);
      setMessage({
        type: 'error',
        message: error.response?.data.message || error.message
      });
      
    }
  }

  return (
    <form onSubmit={onSubmit}>

      <div className="title">Application Form</div>
      <div className="position">
        <div className="label">Position Applied:</div>
        <div className="value">REAL ESTATE NEGOTIATOR</div>
      </div>

      <table className="profile-image">
        <tbody>
          <tr>
            <td colSpan={2}>Profile Image</td>
          </tr>
          <tr>
            <td><img src={ profileImage || employee.profileImage || '/images/profile.png' } alt="profile image" /></td>
            <td><input type="file" name="profileImage" accept="image/*" onChange={handleFileChange} /></td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>:</td>
            <td colSpan={4}><input type="text" name="username" defaultValue={employee.username} key={useId()} /></td>
          </tr>
          <tr>
            <td>Address</td>
            <td>:</td>
            <td colSpan={4}><input type="text" name="address" defaultValue={employee.address} key={useId()} /></td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td colSpan={4}><input type="text" name="email" defaultValue={employee.email} key={useId()} /></td>
          </tr>
          <tr>
            <td>Date of Birthday</td>
            <td>:</td>
            <td><input type="date" name="dob" defaultValue={employee.dob && convertToDateTimeLocalString(new Date(employee.dob))} key={useId()} /></td>
            <td>H/P No</td>
            <td>:</td>
            <td><input type="text" name="HPNo" defaultValue={employee.HPNo} key={useId()} /></td>
          </tr>
          <tr>
            <td>NRIC No</td>
            <td>:</td>
            <td><input type="text" name="NRICNo" defaultValue={employee.NRICNo} key={useId()} /></td>
            <td>Sex</td>
            <td>:</td>
            <td className="radio">
              <div>
                <div>
                  <div>Male</div>
                  <input type="radio" name="sex" value="male" checked={sex === 'male'} onChange={() => setSex('male')} key={useId()} />
                </div>
                <div>
                  <div>Female</div>
                  <input type="radio" name="sex" value="female" checked={sex === 'female'} onChange={() => setSex('female')} key={useId()} />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>BANK A/C No.</td>
            <td>:</td>
            <td><input type="text" name="bankACNo" defaultValue={employee.bankACNo} key={useId()} /></td>
            <td>Emergency Name/ Contact</td>
            <td>:</td>
            <td><input type="text" name="emergencyContact" defaultValue={employee.emergencyContact} key={useId()} /></td>
          </tr>
          <tr>
            <td>Interview Date</td>
            <td>:</td>
            <td><input type="date" name="interviewDate" defaultValue={employee.interviewDate} key={useId()} /></td>
            <td>Interview By</td>
            <td>:</td>
            <td><input type="text" name="interviewBy" defaultValue={employee.interviewBy} key={useId()} /></td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td colSpan={4} className="heading">Job Experience:</td>
          </tr>
          <tr>
            <td className="heading">Company Name</td>
            <td className="heading">Job Title</td>
            <td className="heading">Year(s)</td>
            <td className="heading">Salary (RM)</td>
          </tr>
          {
            jobExperience.map((j, i) => (
              <tr key={i}>
                <td><input type="text" defaultValue={j.companyName} onChange={e => editJobExperience(i, 'companyName', e.target.value)} /></td>
                <td><input type="text" defaultValue={j.jobTitle} onChange={e => editJobExperience(i, 'jobTitle', e.target.value)} /></td>
                <td><input type="number" defaultValue={j.years} onChange={e => editJobExperience(i, 'years', e.target.value)} /></td>
                <td><input type="number" defaultValue={j.salaryInRM} onChange={e => editJobExperience(i, 'salaryInRM', e.target.value)} /></td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={4} className="cell-button">
              <button type="button" onClick={() => setJobExperience([...jobExperience, {}])}>
                <FontAwesomeIcon icon={faAdd} /> Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td colSpan={6} className="heading">NAME CARD</td>
          </tr>
          <tr>
            <td>Name Appearing in Card:</td>
            <td colSpan={2}><input type="text" name="nameCardName" defaultValue={employee.nameCard?.name} key={useId()} /></td>
            <td>Title:</td>
            <td colSpan={2}><input type="text" name="nameCardTitle" defaultValue={employee.nameCard?.title} key={useId()} /></td>
          </tr>
          <tr>
            <td>Chinese Name</td>
            <td><input type="text" name="nameCardChineseName" defaultValue={employee.nameCard?.chineseName} key={useId()} /></td>
            <td>H/P No.:</td>
            <td><input type="text" name="nameCardHPNo" defaultValue={employee.nameCard?.HPNo} key={useId()} /></td>
            <td>Ren No.:</td>
            <td><input type="text" name="nameCardRenNo" defaultValue={employee.nameCard?.RenNo} key={useId()} /></td>
          </tr>
          <tr>
            <td>Email: Company email &</td>
            <td colSpan={2}><input type="text" name="nameCardEmail" defaultValue={employee.nameCard?.email} key={useId()} /></td>
            <td>Has Photo:</td>
            <td colSpan={2}><input type="checkbox" name="nameCardHasPhoto" defaultChecked={employee.nameCard?.hasPhoto} /></td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>Full/Part Time</td>
            <td className="radio">
              <div>
                <div>
                  <div>Full Time</div>
                  <input type="radio" name="type" value="fullTime" checked={type === 'fullTime'} onChange={() => setType('fullTime')} key={useId()} />
                </div>
                <div>
                  <div>Part Time</div>
                  <input type="radio" name="type" value="partTime" checked={type === 'partTime'} onChange={() => setType('partTime')} key={useId()} />
                </div>
              </div>
            </td>
          </tr>
          {
            employee._id !== user._id &&
            <tr>
              <td>Make Admin?</td>
              <td><input type="checkbox" name="isAdmin" defaultChecked={employee.isAdmin} /></td>
            </tr>
          }
        </tbody>
      </table>

      <div className="buttons">
        {
          (userId && userId !== 'new') ?
          <>
          {
            pbLoading ?
            <button type="button" className="button-primary disabled"><LoadingCircle /></button> :
            <button type="submit" className="button-primary">Update</button>
          }
          {
            user._id !== employee._id && (
              sbLoading ?
              <button type="button" className="button-error disabled"><LoadingCircle /></button> :
              <button type="button" className="button-error" onClick={deleteEmployee}>Delete</button>
            )
          }
          </> :
          (
            pbLoading ?
            <button type="button" className="button-primary disabled"><LoadingCircle /></button> :
            <button type="submit" className="button-primary">Register User</button>
          )
        }
      </div>

    </form>
  );
}

export default Form;
