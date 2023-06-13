import React, { useState } from 'react';
import './DoctorDetails.scss';
import { useParams } from 'react-router-dom';
import {
  GetAllBookedScheduleQuery,
  GetDoctorInfor,
  GetUserDoctor,
} from '../../../services/apiQuery';
import { FilterCodeArray, useSelectorLanguage } from '../../../redux/handyHelper';
import DatePickerComponent from '../../../redux/DatePickerComponent/DatePickerComponent';
import { formattedDate } from '../../../utils/formattedDate';
import { FormattedMessage } from 'react-intl';
const DoctorDetailPage = () => {
  let { doctorId } = useParams();
  const language = useSelectorLanguage();
  const timeArray = FilterCodeArray('time');
  const [selectedDate, setSelectedDate] = useState<string>();
  const { data } = GetUserDoctor(doctorId ? doctorId : '');
  const userDetails = data?.users;

  const doctorInforQuery = GetDoctorInfor(doctorId ? parseInt(doctorId) : 0);
  const doctorInfor = doctorInforQuery.data?.data;

  const bookedScheduleQuery = GetAllBookedScheduleQuery({
    date: selectedDate ? selectedDate : `${formattedDate(new Date())}`,
    doctorId: parseInt(doctorId as string),
  });
  const availableSchedules = timeArray.filter((item) =>
    bookedScheduleQuery.data?.allBookedSchedules.every(
      (schedule) => item.keyMap !== schedule.timeType,
    ),
  );
  const htmlMarkdown = doctorInfor?.contentHTML;
  console.log(doctorInfor);
  return (
    <div className="doctor-detail-page">
      <div className="doctor-user">
        <div className="img" style={{ backgroundImage: `url(${userDetails?.image})` }}></div>
        <div className="user-details">
          <div className="doctor-name">
            {language === 'vi' ? (
              <p className="role">{userDetails?.roleData?.valueVi}</p>
            ) : (
              <p className="role">{userDetails?.roleData?.valueEn}</p>
            )}
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
          <div className="description">{doctorInfor?.description}</div>
        </div>
      </div>
      <div className="payment-details">
        <div className="left">
          <div className="date-picker">
            <DatePickerComponent setSelectedDate={setSelectedDate} />
          </div>
          <p className="schedule-title">
            <FormattedMessage id="patient.detail-doctor.available-schedules" />
          </p>
          <div className="schedules">
            {availableSchedules.map((schedule, index) => {
              return (
                <div key={index} className="schedule">
                  {language === 'vi' ? schedule.valueVi : schedule.valueEn}
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="right-item">
            <p className="title">
              <FormattedMessage id="patient.extra-infor-doctor.text-address" />
            </p>
            <p className="clinic-name">{doctorInfor?.clinicName}</p>
            <p>{doctorInfor?.clinicAddress}</p>
          </div>
          <div className="right-item">
            <p className="inline-des">
              <FormattedMessage id="patient.extra-infor-doctor.price" />
              <span>
                {language === 'vi'
                  ? doctorInfor?.priceTypeData?.valueVi + ' ' + 'VND'
                  : 'USD' + ' ' + doctorInfor?.priceTypeData?.valueEn}
              </span>
            </p>
          </div>
          <div className="right-item">
            <p className="inline-des">
              <FormattedMessage id="patient.extra-infor-doctor.payment" />
              <span>
                {language === 'vi'
                  ? doctorInfor?.paymentTypeData?.valueVi
                  : doctorInfor?.paymentTypeData?.valueEn}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: htmlMarkdown as string }}></div>
      </div>
    </div>
  );
};

export default DoctorDetailPage;
