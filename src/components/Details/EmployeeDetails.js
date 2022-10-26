import React, { useEffect } from "react";
import { Layout } from "../../layout/layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../store/slices/employeeSlice";

export const EmployeeDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const { employees } = useSelector((state) => state.employees);
  const employeeDetails = employees.filter((el) => el.id === id);

  // console.log(id, employeeDetails);

  return (
    <Layout>
      <div className="details">
        <h2>Employee Details</h2>

        {employeeDetails && employeeDetails[0] && (
          <>
            <p>First Name: {employeeDetails[0].first_name}</p>
            <p>Last Name: {employeeDetails[0].last_name}</p>
            <p>Division: {employeeDetails[0].division}</p>
            <p>District: {employeeDetails[0].district}</p>
          </>
        )}
      </div>
    </Layout>
  );
};
