import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import DatePickerComponent from '../../redux/DatePickerComponent/DatePickerComponent';
import { FilterAvailableSchedules, useSelectorLanguage } from '../../redux/handyHelper';
import SchedulePickerComponent from '../../redux/SchedulePickerComponent/SchedulePickerComponent';
import { GetDoctorInfor, GetUserDoctor } from '../../services/apiQuery';
import { postBooking } from '../../services/userServices';
import { InitialBookingForm, OriginalCode } from '../../utils/types';
import './BookingDoctorPage.scss';

interface Props {
  doctorId: string;
  date: string;
  selectedSchedule: OriginalCode;
  setIsBooking: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingDoctorPage: React.FC<Props> = ({ doctorId, date, selectedSchedule, setIsBooking }) => {
  const { data } = GetUserDoctor(doctorId ? doctorId : '');
  const language = useSelectorLanguage();
  const userDetails = data?.users;
  const doctorInforQuery = GetDoctorInfor(doctorId ? parseInt(doctorId) : 0);
  const doctorInfor = doctorInforQuery.data?.data;

  const [selectedDate, setSelectedDate] = useState(date);
  const [schedule, setSchedule] = useState<OriginalCode | undefined>(selectedSchedule);
  const [isSelectOtherDate, setIsSelectOtherDate] = useState(false);
  const [isSelectOtherSchedule, setIsSelectOtherSchedule] = useState(false);
  const availableSchedules = FilterAvailableSchedules(parseInt(doctorId as string), selectedDate);

  const initialBookingForm = {
    doctorId: parseInt(doctorId),
    date: selectedDate,
    timeType: schedule ? schedule?.keyMap : 'T0',
    patientFullName: '',
    patientEmail: '',
    patientPhoneNumber: '',
    note: '',
  };
  const [bookingForm, setBookingForm] = useState<InitialBookingForm>(initialBookingForm);

  const postBookingMutation = useMutation({
    mutationFn: async (bookingForm: InitialBookingForm) => {
      const response = await postBooking(bookingForm);
      console.log(response);
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      }
      if (response.errCode === 0) {
        console.log(response.errCode === 0);
        toast.success(response.errMessage);
        setBookingForm(initialBookingForm);
      }
    },
  });
  const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postBookingMutation.mutate(bookingForm);
  };
  return (
    <div className="BookingDoctorPage">
      <div className="appointment">
        <i className="fa-solid fa-circle-xmark" onClick={() => setIsBooking(false)}></i>
        <p className="container-title">Reserve An Appointment</p>
        <div className="doctor-details">
          <div className="img" style={{ backgroundImage: `url(${userDetails?.image})` }}></div>
          <div className="detail">
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
            <div className="item">
              <p className="clinic-name">{doctorInfor?.clinicName}</p>
            </div>
            <div className="item">
              <p className="title">
                <FormattedMessage id="patient.extra-infor-doctor.text-address" />
              </p>
              <p>{doctorInfor?.clinicAddress}</p>
            </div>
            <div className="item">
              <p className="title">
                <FormattedMessage id="patient.extra-infor-doctor.price" />
              </p>
              <span>
                {language === 'vi'
                  ? doctorInfor?.priceTypeData?.valueVi + ' ' + 'VND'
                  : 'USD' + ' ' + doctorInfor?.priceTypeData?.valueEn}
              </span>
            </div>
            <div className="item">
              <p className="title">
                <FormattedMessage id="patient.extra-infor-doctor.payment" />
              </p>
              <span>
                {language === 'vi'
                  ? doctorInfor?.paymentTypeData?.valueVi
                  : doctorInfor?.paymentTypeData?.valueEn}
              </span>
            </div>
          </div>
        </div>
        <div className="booking-details">
          <p className="section-title">Booking Details:</p>
          <div className="section-item">
            <div className="top">
              <p className="selected">{selectedDate}</p>
              <p className="change" onClick={() => setIsSelectOtherDate(!isSelectOtherDate)}>
                Select other date
              </p>
            </div>
            {isSelectOtherDate && <DatePickerComponent setSelectedDate={setSelectedDate} />}
          </div>
          <div className="section-item">
            <div className="top">
              {schedule && (
                <p className="selected">
                  {language === 'vi' ? schedule.valueVi : schedule.valueEn}
                </p>
              )}
              <p
                className="change"
                onClick={() => setIsSelectOtherSchedule(!isSelectOtherSchedule)}
              >
                Select other Schedule
              </p>
            </div>
            {isSelectOtherSchedule && (
              <SchedulePickerComponent
                availableSchedules={availableSchedules}
                setSelectedSchedule={setSchedule}
              />
            )}
          </div>
        </div>
        <form className="patient-details" onSubmit={(e) => handleSubmition(e)}>
          <p className="section-title">Patient Details:</p>
          <div className="form-item">
            <label htmlFor="">Full name:</label>
            <input
              required
              name="patientFullName"
              type="text"
              defaultValue={bookingForm.patientFullName}
              onChange={(e) =>
                setBookingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
              }
            />
          </div>
          <div className="form-item">
            <label htmlFor="">Email:</label>
            <input
              required
              name="patientEmail"
              type="text"
              defaultValue={bookingForm.patientEmail}
              onChange={(e) =>
                setBookingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
              }
            />
          </div>
          <div className="form-item">
            <label htmlFor="">Phone Number:</label>
            <input
              required
              name="patientPhoneNumber"
              type="text"
              defaultValue={bookingForm.patientPhoneNumber}
              onChange={(e) =>
                setBookingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
              }
            />
          </div>
          <div className="form-item">
            <label htmlFor="">Note:</label>
            <input
              name="note"
              type="text"
              defaultValue={bookingForm.note}
              onChange={(e) =>
                setBookingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
              }
            />
          </div>
          <button className="submit-btn" type="submit">
            Book an Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingDoctorPage;
