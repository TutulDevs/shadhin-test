import { useFormik } from "formik";
import { useState } from "react";
import { userTypes } from "../../lib/coreconstants";
import { Country, State, City } from "country-state-city";

export const useAddUser = () => {
  const [showModal, setShowModal] = useState(false);
  const handleToggleModal = () => setShowModal(!showModal);

  // const districts = State.getStatesOfCountry("BD");
  // console.log(districts);

  const districtsOfBD = State.getStatesOfCountry("BD").map((state) => {
    return {
      value: state.name,
      label: state.name,
    };
  });

  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Required";
    }

    if (!values.last_name) {
      errors.last_name = "Required";
    }

    if (!values.user_type) {
      errors.user_type = "Required";
    } else if (values.user_type === "Select...") {
      errors.user_type = "Select a valid option";
    }

    if (values.user_type === "employee") {
      if (!values.division) {
        errors.division = "Required";
      } else if (values.division === "Select...") {
        errors.division = "Select a valid option";
      }

      if (!values.district) {
        errors.district = "Required";
      } else if (values.district === "Select...") {
        errors.district = "Select a valid option";
      }
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      user_type: "",
      division: "",
      district: "",
    },
    validate,
    onSubmit: (payload) => {
      const data =
        payload.user_type === "employee"
          ? payload
          : { ...payload, division: "", district: "" };

      console.log(data);
    },
  });

  const userTypeIsEmployee = formik.values.user_type === "employee";

  return {
    showModal,
    handleToggleModal,
    formik,
    validate,
    districtsOfBD,
    userTypeIsEmployee,
  };
};
