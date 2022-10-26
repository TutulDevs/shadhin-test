import React, { useEffect } from "react";
import { Layout } from "../../layout/layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAdmins } from "../../store/slices/adminSlice";

export const AdminDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmins());
  }, []);

  const { admins } = useSelector((state) => state.admins);
  const adminDetails = admins.filter((el) => el.id === id);

  // console.log(id, adminDetails);

  return (
    <Layout>
      <div className="details">
        <h2>Admin Details</h2>

        {adminDetails && adminDetails[0] && (
          <>
            <p>First Name: {adminDetails[0].first_name}</p>
            <p>Last Name: {adminDetails[0].last_name}</p>
            <p>Division: {adminDetails[0].division}</p>
            <p>District: {adminDetails[0].district}</p>
          </>
        )}
      </div>
    </Layout>
  );
};
