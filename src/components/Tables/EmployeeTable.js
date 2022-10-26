import { TableItem } from "./TableItem";

export const EmployeeTable = () => {
  return (
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
          <TableItem
            item={{
              id: 1,
              first_name: "John",
              last_name: "Doe",
              division: "Mymensingh",
              district: "Mymensingh",
            }}
          />
        </tbody>
      </table>
    </div>
  );
};
