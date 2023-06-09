import React from 'react';
import DoctorDetailPage from '../../Pages/DoctorDetailPage/DoctorDetailPage';
import ClinicDetailPage from '../../Pages/ClinicDetailPage/ClinicDetailPage';
import SpecialtyDetailPage from '../../Pages/SpecialtyDetailPage/SpecialtyDetailPage';
import './DetailLayoutPage.scss';
type CategoriesType = 'doctor' | 'clinic' | 'specialty';
type TypeMap = {
  [K in CategoriesType]: React.FC;
};
interface Props {
  category: CategoriesType;
}

const DetailPageLayout: React.FC<Props> = ({ category }) => {
  const categories: TypeMap = {
    doctor: DoctorDetailPage,
    clinic: ClinicDetailPage,
    specialty: SpecialtyDetailPage,
  };
  const RenderElement = categories[category];
  return (
    <div className="detail-page-layout">
      <RenderElement />
    </div>
  );
};

export default DetailPageLayout;
