import React from 'react';
import { OriginalCode } from '../../utils/types';
import { useSelectorLanguage } from '../handyHelper';
import './SchedulePickerComponent.scss';

interface Props {
  availableSchedules: OriginalCode[] | undefined;
  setSelectedSchedule: React.Dispatch<React.SetStateAction<OriginalCode | undefined>>;
}

const SchedulePickerComponent: React.FC<Props> = ({ availableSchedules, setSelectedSchedule }) => {
  const language = useSelectorLanguage();
  return (
    <div className="SchedulePickerComponent">
      {availableSchedules &&
        availableSchedules.map((schedule, index) => {
          return (
            <div key={index} className="schedule" onClick={() => setSelectedSchedule(schedule)}>
              {language === 'vi' ? schedule.valueVi : schedule.valueEn}
            </div>
          );
        })}
    </div>
  );
};

export default SchedulePickerComponent;
