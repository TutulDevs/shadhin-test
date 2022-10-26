import { TableItem } from "./TableItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmins } from "../../store/slices/adminSlice";

export const AdminTable = () => {
  const dispatch = useDispatch();
  const { admins, isLoading } = useSelector((state) => state.admins);

  // console.log(admins.length, isLoading);

  useEffect(() => {
    dispatch(getAdmins());
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
                <th></th>
              </tr>
            </thead>

            <tbody>
              {admins.map((el) => (
                <TableItem key={el.id} item={el} type="admin" />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
