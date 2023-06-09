import React from 'react';
import './DoctorDetails.scss';
import { useParams } from 'react-router-dom';
import { GetUserDoctor } from '../../../services/apiQuery';
import { useSelectorLanguage } from '../../../redux/handyHelper';
import { User } from '../../../utils/types';
const DoctorDetailPage = () => {
  let { doctorId } = useParams();
  const { data } = GetUserDoctor(doctorId ? doctorId : '');
  const language = useSelectorLanguage();
  const userDetails = data?.users;
  console.log(userDetails);
  return (
    <div className="doctor-detail-page">
      <div className="doctor-user">
        <div className="img" style={{ backgroundImage: `url(${userDetails?.image})` }}></div>
        <div className="user-details">
          {language === 'vi' ? <p className="role">Bác Sĩ</p> : <p className="role">Dr.</p>}
          <p></p>

          {language === 'vi' ? (
            <div className="name">
              <p>{userDetails?.lastName}</p>
              <p>{userDetails?.firstName}</p>
            </div>
          ) : (
            <div className="name">
              <p>{userDetails?.firstName}</p>
              <p>{userDetails?.lastName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailPage;
