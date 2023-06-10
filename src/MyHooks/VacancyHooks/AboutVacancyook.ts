import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchVacancy } from "../../reducers/Slice/vacancySlice";
import { postResponse } from "../../reducers/Slice/responseSlice";
import { useAppDispatch, useAppSelector } from "../../reducers/store/hookRedux";

export function useAboutVacancyHook() {
  const [acceptedWindow, setAcceptedWindow] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [jobApplicationForm, setJobApplicationForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    additionalComment: "",
  });

  const dispatch = useAppDispatch();

  const { id } = useParams();

  const vacancy = useAppSelector((state) => state.vacancySlice.vacancy).find(
    (item) => item._id === id
  );

  useEffect(() => {
    dispatch(fetchVacancy());
  }, [dispatch]);

  const hundleJobFullName = (event: ChangeEvent<HTMLInputElement>) => {
    setJobApplicationForm({ ...jobApplicationForm, fullName: event.target.value });
  };
  const hundleJobEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setJobApplicationForm({ ...jobApplicationForm, email: e.target.value });
  };
  const hundleJobPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setJobApplicationForm({
      ...jobApplicationForm,
      phoneNumber: e.target.value,
    });
  };
  const hundleJobAdditionalComment = (e: ChangeEvent<HTMLInputElement>) => {
    setJobApplicationForm({
      ...jobApplicationForm,
      additionalComment: e.target.value,
    });
  };

  const handleChangeButton = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(postResponse({ ...jobApplicationForm }));
    setJobApplicationForm({
      fullName: "",
      email: "",
      phoneNumber: "",
      additionalComment: "",
    });
  };

  const handlePrivacyPolicy = () => {
    setPrivacyPolicy(!privacyPolicy);
  };

  const handleClickWindow = () => {
    setAcceptedWindow(!acceptedWindow);
  };
  return {
    acceptedWindow,
    setAcceptedWindow,
    hundleJobAdditionalComment,
    hundleJobEmail,
    hundleJobFullName,
    vacancy,
    handleChangeButton,
    jobApplicationForm,
    privacyPolicy,
    hundleJobPhoneNumber,
    handleClickWindow,
    handlePrivacyPolicy,
  };
}
