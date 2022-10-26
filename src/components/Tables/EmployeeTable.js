import { TableItem } from "./TableItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../store/slices/employeeSlice";

export const EmployeeTable = () => {
  const dispatch = useDispatch();
  const { employees, isLoading } = useSelector((state) => state.employees);

  // console.log(admins, isLoading);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p className="text-center ">Loading...</p>}

      {!isLoading && (
        <div className="table-responsive">
          <table className="user-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Division</th>
                <th>District</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {employees.map((el) => (
                <TableItem key={el.id} item={el} type="employee" />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
