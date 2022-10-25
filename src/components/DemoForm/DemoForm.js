import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const DemoForm = () => {
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (payload) => {
      console.log(payload);
      setShowModal(true);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>

      {showModal && (
        <Modal
          visible={showModal}
          onClose={() => setShowModal(false)}
          title="Modal Title"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
          dignissimos!
        </Modal>
      )}
    </>
  );
};
