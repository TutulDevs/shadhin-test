import React from "react";
import { Link } from "react-router-dom";

export const TableItem = ({ item, type }) => {
  return (
    <tr>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      {type === "employee" && (
        <>
          <td>{item.division}</td>
          <td>{item.district}</td>
        </>
      )}
      <td>
        <Link to={`/${type}/${item.id}`} className="">
          Details
        </Link>
      </td>
    </tr>
  );
};
